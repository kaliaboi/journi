"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChatGPTMessage,
  initialMessages,
  initialPrompt,
  openai,
} from "../lib/openai";
import ChatLoader from "./ui/ChatLoader";
import Input from "./ui/Input";
import Message from "./Message";

const Chat = ({}) => {
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
      {messages.map(({ content, role }, index) => (
        <Message key={index} role={role} message={content} />
      ))}

      {loading ? (
        <ChatLoader />
      ) : (
        <Input input={input} setInput={setInput} sendMessage={sendMessage} />
      )}
    </div>
  );
};

export default Chat;
