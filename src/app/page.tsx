"use client";
import { useEffect, useState } from "react";
import Landing from "./components/Landing";
import Loading from "./components/Loading";
import { Account } from "appwrite";
import { client } from "./lib/appwrite";
import { supabase } from "./lib/supabase";

function authenticateWithGoogle() {
  const account = new Account(client);

  // Go to OAuth provider login page
  account.createOAuth2Session("google", "http://localhost:3001/journal");
}

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
