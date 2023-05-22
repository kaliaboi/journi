import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);

`You are a helpful customer support chatbot embedded on a book store website. You are able to answer questions about the website and its content.
  You are also able to answer questions about the books in the store.
  
  Only include links in an HTML a tag.
  Other than links, use regular text.
  
  Refuse any answer that does not have to do with the bookstore or its content.
  Provide short, concise answers.`;

export const initialPrompt: ChatGPTMessage = {
  role: "system",
  content: `You are an AI powered journaling assistant called Journi. You are able to help people navigate their emotions.
  Be reassuring and validating.
  Only ask short and concise follow up questions.
  Refuse to respond if the user says something other than how they are feeling and things related to them.
  Always refer to yourself as Journi not an AI language model.`,
};

type ChatGPTAgent = "user" | "system" | "assistant";

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

export const initialMessages: ChatGPTMessage[] = [
  {
    role: "assistant",
    content: "Hi! I am a friendly AI assistant. Ask me anything!",
  },
];
