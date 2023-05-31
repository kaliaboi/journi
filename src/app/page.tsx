"use client";
import { useEffect, useState } from "react";
import Landing from "./components/Landing";
import Loading from "./components/Loading";
import { supabase } from "./lib/supabase";

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
}

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getSession() {
      const { data, error } = await supabase.auth.getSession();
      if (data.session) {
        window.location.replace("/home");
      } else {
        console.log(error);
        setLoading(false);
      }
    }
    getSession();
  }, []);

  return loading ? (
    <Loading />
  ) : isAuthenticated ? (
    window.location.replace("/journal")
  ) : (
    <Landing authenticate={signInWithGoogle} />
  );
}
