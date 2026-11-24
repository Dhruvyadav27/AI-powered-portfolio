import AssistantChat from "@/components/assistant-chat";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Portfolio Assistant",
};

export default function AssistantPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100dvh-12rem)] w-full max-w-2xl flex-col gap-6">
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to portfolio
      </Link>
      <AssistantChat />
    </main>
  );
}
