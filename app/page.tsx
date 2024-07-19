"use client";
import { ContainerContent } from "./components/ContainerContent";
import { Content } from "./components/Content";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center scroll-smooth">
        <div>
          <ContainerContent />
        </div>
    </main>
  );
}
