import Title from "../components/ui/Title";
import Paragraph from "../components/ui/Paragraph";
import Button from "../components/ui/Button";
import MainAnimation from "../components/MainAnimation";
import { LockClosedIcon } from "@radix-ui/react-icons";

export default function Landing({ authenticate }: any) {
  return (
    <main className="flex w-full justify-center">
      <div className="px-6 py-12 flex flex-col justify-between lg:justify-center max-w-md">
        <div className="top">
          <MainAnimation />
          <Title intent="title" alignment="centered">
            Welcome to Journi!
          </Title>
          <Paragraph className="pt-4" alignment="centered">
            Journi is a tiny AI powered everyday journal that helps you build a
            journaling habit by asking you 3 questions on how you are feeling.
          </Paragraph>
        </div>
        <div className="bottom lg:mt-24">
          <Button className="lg:mt-12" onClick={() => authenticate()}>
            Start Journaling
          </Button>
          <div className="disclaimer flex flex-row items-center justify-center gap-1 mt-4">
            <LockClosedIcon className="text-[#6b7280]" />
            <Paragraph className="" alignment="centered" size="tiny">
              All data stored privately on this device
            </Paragraph>
          </div>
        </div>
      </div>
    </main>
  );
}
