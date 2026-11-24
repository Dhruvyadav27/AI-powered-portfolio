"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { LoaderCircle, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function getReply(result: unknown): string | null {
  if (
    typeof result === "object" &&
    result !== null &&
    "reply" in result &&
    typeof result.reply === "string"
  ) {
    return result.reply;
  }
  return null;
}

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi! I’m Dhruv’s portfolio assistant. Ask me about his projects, skills, or experience.",
  },
];

export default function AssistantChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = input.trim();
    if (!message || isSending) return;

    const history = messages.slice(-20);
    setMessages((current) => [...current, { role: "user", content: message }]);
    setInput("");
    setError("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });
      const result: unknown = await response.json();

      if (!response.ok) {
        const errorMessage =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "The assistant could not process your message.";
        throw new Error(errorMessage);
      }

      const reply = getReply(result);
      if (reply === null) {
        throw new Error("The chat backend returned an invalid response.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: reply },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to reach the chat backend. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="flex min-h-[min(70dvh,42rem)] flex-1 flex-col overflow-hidden rounded-2xl border bg-card shadow-sm">
      <header className="flex items-center gap-3 border-b px-5 py-4">
        <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Icons.assistant className="size-6" />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="font-semibold">Portfolio Assistant</h1>
          <p className="text-xs text-muted-foreground">
            Ask about Dhruv’s work and experience
          </p>
        </div>
        <span className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
          AI assistant
        </span>
      </header>

      <div
        className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 sm:p-6"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.map((item, index) => (
          <div
            key={`${item.role}-${index}`}
            className={`flex ${item.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                item.role === "user"
                  ? "rounded-br-md bg-primary text-primary-foreground"
                  : "rounded-bl-md bg-muted text-foreground"
              }`}
            >
              {item.content}
            </p>
          </div>
        ))}
        {isSending && (
          <div className="flex items-center gap-2 self-start rounded-2xl rounded-bl-md bg-muted px-4 py-3 text-sm text-muted-foreground">
            <LoaderCircle className="size-4 animate-spin" />
            Thinking…
          </div>
        )}
        {error && (
          <p
            role="alert"
            className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
          >
            {error}
          </p>
        )}
        <div ref={endOfMessagesRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t p-3 sm:p-4">
        <label className="sr-only" htmlFor="assistant-message">
          Your message
        </label>
        <div className="flex items-center gap-2 rounded-xl border bg-background p-2 focus-within:ring-2 focus-within:ring-ring">
          <input
            id="assistant-message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask me anything about the portfolio…"
            maxLength={4000}
            disabled={isSending}
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:opacity-60"
          />
          <Button
            type="submit"
            size="icon"
            aria-label="Send message"
            disabled={!input.trim() || isSending}
          >
            {isSending ? (
              <LoaderCircle className="size-4 animate-spin" />
            ) : (
              <Send className="size-4" />
            )}
          </Button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Responses come from the connected portfolio backend.
        </p>
      </form>
    </section>
  );
}
