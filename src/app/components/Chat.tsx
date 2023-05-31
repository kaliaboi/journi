"use client";

import { useEffect, useRef, useState } from "react";
import moment from "moment";
import {
  ChatGPTMessage,
  initialMessages,
  initialPrompt,
  openai,
  summarizeMessage,
} from "../lib/openai";
import ChatLoader from "./ui/ChatLoader";
import Input from "./ui/Input";
import Message from "./Message";
import EntryHeader from "./EntryHeader";
import EntryFooter from "./EntryFooter";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import { nanoid } from "nanoid";

const Chat = ({}) => {
  const date = useRef(moment().format("MMMM Do, h:mm A"));
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

  const handleSubmit = () => {
    setLoading(true);
    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [...messages, summarizeMessage as ChatGPTMessage],
      })
      .then(async (response) => {
        setLoading(false);
        const summary = response.data.choices[0].message?.content
          .replace("s = ", "")
          .replace(/['"]+/g, "");

        const { data } = await supabase.auth.getSession();
        const userId = data.session?.user.id;
        const journaledAt = date.current;
        console.log(userId);

        const { error } = await supabase.from("Entries").insert({
          user_id: userId,
          journaled_at: journaledAt,
          summary: summary,
        });

        window.location.replace("/home");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={chatRef}
      className="max-w-xl bg-slate-50"
    >
      <EntryHeader
        title="New Entry"
        subtitle={moment().format("MMMM Do, h:mm A")}
      />
      <div className="prompt">
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
        submitAction={handleSubmit}
      />
    </motion.div>
  );
};

export default Chat;
