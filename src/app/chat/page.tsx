import { LockClosedIcon } from "@radix-ui/react-icons";
import MainAnimation from "../components/MainAnimation";
import Title from "../components/ui/Title";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";
import ChatBlock from "../components/ChatBlock";

export default function Home() {
  return (
    <main className="px-4 py-4 flex flex-col w-full max-w-2xl">
      <ChatBlock question="Hi Jane, how are you doing?" />
    </main>
  );
}
