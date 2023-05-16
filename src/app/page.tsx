import Title from "./components/ui/Title";
import Paragraph from "./components/ui/Paragraph";
import Button from "./components/ui/Button";
import MainAnimation from "./components/MainAnimation";

export default function Home() {
  return (
    <main className="px-6 py-12 flex flex-col justify-around">
      <div className="top">
        <MainAnimation />
        <Title intent="title" alignment="centered">
          Welcome to Journi!
        </Title>
        <Paragraph alignment="centered">
          Journi is a tiny AI powered everyday journal that helps you build a
          journaling habit by asking you 3 questions on how you are feeling.
        </Paragraph>
      </div>
      <Button className="mt-24">Start Journaling</Button>
    </main>
  );
}
