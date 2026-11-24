import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function isChatMessage(value: unknown): value is ChatMessage {
  return (
    typeof value === "object" &&
    value !== null &&
    "role" in value &&
    (value.role === "user" || value.role === "assistant") &&
    "content" in value &&
    typeof value.content === "string" &&
    value.content.length <= 4000
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("message" in body) ||
    typeof body.message !== "string" ||
    !body.message.trim() ||
    body.message.length > 4000
  ) {
    return NextResponse.json(
      { error: "Message must be a non-empty string of at most 4000 characters." },
      { status: 400 },
    );
  }

  const history =
    "history" in body && Array.isArray(body.history) ? body.history : [];
  if (history.length > 20 || !history.every(isChatMessage)) {
    return NextResponse.json(
      { error: "History must contain at most 20 valid chat messages." },
      { status: 400 },
    );
  }

  const backendUrl = process.env.CHAT_BACKEND_URL;
  if (!backendUrl) {
    return NextResponse.json(
      { error: "Chat backend is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  let parsedBackendUrl: URL;
  try {
    parsedBackendUrl = new URL(backendUrl);
  } catch {
    return NextResponse.json(
      { error: "Chat backend URL is not configured correctly." },
      { status: 500 },
    );
  }
  if (parsedBackendUrl.protocol !== "http:" && parsedBackendUrl.protocol !== "https:") {
    return NextResponse.json(
      { error: "Chat backend URL must use HTTP or HTTPS." },
      { status: 500 },
    );
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (process.env.CHAT_BACKEND_TOKEN) {
    headers.Authorization = `Bearer ${process.env.CHAT_BACKEND_TOKEN}`;
  }

  let upstreamResponse: Response;
  let responseText: string;
  try {
    upstreamResponse = await fetch(parsedBackendUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        message: body.message,
        history,
      }),
      cache: "no-store",
    });
    responseText = await upstreamResponse.text();
  } catch {
    return NextResponse.json(
      { error: "Unable to reach the chat backend. Please try again later." },
      { status: 502 },
    );
  }

  if (!upstreamResponse.ok) {
    return NextResponse.json(
      { error: `Chat backend returned status ${upstreamResponse.status}.` },
      { status: 502 },
    );
  }

  let upstreamBody: unknown;
  try {
    upstreamBody = JSON.parse(responseText);
  } catch {
    return NextResponse.json(
      { error: "Chat backend returned invalid JSON." },
      { status: 502 },
    );
  }

  if (
    typeof upstreamBody !== "object" ||
    upstreamBody === null ||
    !("reply" in upstreamBody) ||
    typeof upstreamBody.reply !== "string"
  ) {
    return NextResponse.json(
      { error: "Chat backend response must include a string reply." },
      { status: 502 },
    );
  }

  return NextResponse.json({ reply: upstreamBody.reply });
}
