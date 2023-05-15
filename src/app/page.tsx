"use client";

import Title from "./components/ui/Title";
import Paragraph from "./components/ui/Paragraph";
import Lottie from "lottie-react";
import animation from "../../public/transistor-man-sitting-and-looking-at-smartphone.json";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main className="flex h-screen flex-col p-8 max-w-xl justify-between">
      <div className="top px-2">
        <Lottie animationData={animation} loop={true} />
        <Title intent="title" alignment="centered">
          Welcome to Journi!
        </Title>
        <Paragraph alignment="centered">
          Journi is a tiny everyday journal that helps you build a journaling
          habit by asking you 3 questions on how you are feeling.
        </Paragraph>
      </div>
      <Button>Start Journaling</Button>
    </main>
  );
}
