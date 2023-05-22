import { FC, useEffect, useRef, useState } from "react";
import { openai } from "../lib/openai";
import Chat from "../components/Chat";

const page: FC = ({}) => {
  return (
    <div className="bg-slate-50 h-full">
      <Chat />
    </div>
  );
};

export default page;
