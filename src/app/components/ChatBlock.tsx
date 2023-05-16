"use client";

import { FC, useState } from "react";
import Paragraph from "./ui/Paragraph";

interface ChatBlockProps {
  question: string;
}

const ChatBlock: FC<ChatBlockProps> = ({ question }) => {
  const [response, setResponse] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div className="flex flex-col">
      <Paragraph>{question}</Paragraph>
      {sent ? (
        <Paragraph>{response}</Paragraph>
      ) : (
        <textarea
          onChange={(e) => {
            setResponse(e.target.value);
          }}
          autoFocus
          value={response}
        >
          {response}
        </textarea>
      )}
    </div>
  );
};

export default ChatBlock;
