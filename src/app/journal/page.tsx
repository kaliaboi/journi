"use client";

import { FC, useEffect, useRef, useState } from "react";
import { openai } from "../lib/openai";
import Chat from "../components/Chat";
import { supabase } from "../lib/supabase";

const page: FC = ({}) => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>({});
  useEffect(() => {
    setLoading(true);
    async function getSession() {
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
      } else {
        window.location.replace("/");
        console.log(error);
        setLoading(false);
      }
    }
    getSession();
  }, []);
  return (
    <div className="bg-slate-50 h-full">
      <Chat />
    </div>
  );
};

export default page;
