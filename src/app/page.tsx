import Title from "./components/ui/Title";
import Paragraph from "./components/ui/Paragraph";
import Button from "./components/ui/Button";
import MainAnimation from "./components/MainAnimation";

export default function Home() {
  return (
    <main className="flex h-screen flex-col py-8 px-4 max-w-xl justify-around">
      <div className="top">
        <MainAnimation />
        <Title intent="title" alignment="centered">
          Welcome to Journi!
        </Title>
        <Paragraph alignment="centered">
          Journi is a tiny everyday journal that helps you build a journaling
          habit by asking you 3 questions on how you are feeling.
        </Paragraph>
        <Button className="mt-24">Start Journaling</Button>
      </div>
    </main>
  );
}
