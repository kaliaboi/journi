"use client";
import { useEffect, useState } from "react";
import Landing from "./components/Landing";
import Loading from "./components/Loading";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (localStorage.getItem("userId") !== null) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  });

  return loading ? (
    <Loading />
  ) : isAuthenticated ? (
    window.location.replace("/journal")
  ) : (
    <Landing />
  );
}
