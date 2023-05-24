"use client";

import { useEffect, useRef, useState } from "react";
import moment from "moment";
import {
  ChatGPTMessage,
  initialMessages,
  initialPrompt,
  openai,
} from "../lib/openai";
import ChatLoader from "./ui/ChatLoader";
import Input from "./ui/Input";
import Message from "./Message";
import EntryHeader from "./EntryHeader";
import EntryFooter from "./EntryFooter";

const Chat = ({}) => {
  const [time, setTime] = useState<number>(Date.now());
  const [steps, setSteps] = useState<number>(1);
  const [prompts, setPrompts] = useState<ChatGPTMessage[]>(initialMessages);
  const chatRef = useRef<null | HTMLDivElement>(null);
  const sendMessage = async (message: string) => {
    setLoading(true);
    const newMessages = [
      ...messages,
      { role: "user", content: message } as ChatGPTMessage,
    ];
    setMessages(newMessages);
  };

  const [messages, setMessages] = useState<ChatGPTMessage[]>(initialMessages);
  useEffect(() => {
    function getResponse() {
      if (messages.at(-1)?.role === "user") {
        setLoading(true);
        openai
          .createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [initialPrompt, ...messages],
          })
          .then((response) => {
            setLoading(false);
            setSteps(steps + 1);
            setPrompts([
              ...prompts,
              {
                role: "assistant",
                content: String(response.data.choices[0].message?.content),
              },
            ]);
            setMessages([
              ...messages,
              {
                role: "assistant",
                content: String(response.data.choices[0].message?.content),
              },
            ]);
          });
      }
    }
    getResponse();
    chatRef.current?.scroll({
      top: chatRef.current.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }, [messages]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div ref={chatRef} className="">
      <EntryHeader
        title="New Entry"
        subtitle={moment().format("MMMM Do YYYY, h:mm A")}
      />
      <div className="prompt mt-2">
        <Message
          role={prompts[prompts.length - 1].role}
          message={prompts[prompts.length - 1].content}
        />
      </div>
      {!loading && (
        <Input
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          disabled={loading}
        />
      )}

      <EntryFooter
        input={input}
        loading={loading}
        submitActive={steps > 3}
        nextAction={sendMessage}
        setInput={setInput}
      />
    </div>
  );
};

export default Chat;
