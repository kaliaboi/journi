"use client";

import { FC, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>({});

  useEffect(() => {
    setLoading(true);
    async function getSession() {
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
      } else {
        console.log(error);
        setLoading(false);
      }
    }
    getSession();
  }, []);

  return (
    <div>
      {session.access_token && <p>Hello {session.user.user_metadata.name}</p>}
      <button
        onClick={async () => {
          const { error } = await supabase.auth.signOut();
          window.location.replace("/");
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
