import { FC } from "react";
import Button from "./ui/Button";

interface EntryFooterProps {
  loading?: boolean;
  submitActive?: boolean;
  nextAction: any;
  setInput: any;
  input: string;
  submitAction: any;
}

const EntryFooter: FC<EntryFooterProps> = ({
  loading,
  submitActive,
  nextAction,
  input,
  setInput,
  submitAction,
}) => {
  return (
    <div className="flex flex-row-reverse justify-between px-[20px] fixed bottom-5 w-full">
      <Button
        size="tiny"
        className="w-auto"
        activity={loading ? "loading" : "active"}
        onClick={() => {
          nextAction(input);
          setInput("");
        }}
      >
        {loading ? "Loading..." : "Next"}
      </Button>
      {submitActive && (
        <Button
          intent="success"
          size="tiny"
          className="w-auto"
          onClick={() => submitAction()}
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default EntryFooter;
