import Title from "./components/ui/Title";
import Paragraph from "./components/ui/Paragraph";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10 max-w-xl">
      <Title intent="title">Welcome to Journi!</Title>
      <Paragraph>
        Journi is a tiny everyday journal that helps you build a journaling
        habit by asking you 3 questions on how you're feeling{" "}
      </Paragraph>
    </main>
  );
}
