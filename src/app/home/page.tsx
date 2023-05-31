"use client";

import { FC, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";
import NewButton from "../components/ui/NewButton";
import AppHeader from "../components/AppHeader";
import Paragraph from "../components/ui/Paragraph";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>({});
  const [entries, setEntries] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    async function getEntries(id: string) {
      const { data, error } = await supabase
        .from("Entries")
        .select()
        .eq("user_id", id);
      setEntries(data);
    }
    async function getSession() {
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
        getEntries(data.session.user.id);
      } else {
        window.location.replace("/");
        console.log(error);
        setLoading(false);
      }
    }
    getSession();
  }, []);

  return (
    <div>
      <AppHeader />
      <div className="px-[20px] my-10">
        <p>Your Entries</p>
        {entries.map((entry: any, key: any) => (
          <div className="my-4 border-2 p-4 rounded-lg" key={key}>
            <Paragraph className="text-gray-950 font-semibold mb-4">
              {entry.journaled_at}
            </Paragraph>
            <Paragraph prominence="dark">{entry.summary}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
