"use client";

import { FC } from "react";
import Paragraph from "./ui/Paragraph";
import Link from "next/link";
import { Cross1Icon } from "@radix-ui/react-icons";
import Button from "./ui/Button";
import { supabase } from "../lib/supabase";

const AppHeader: FC = ({}) => {
  return (
    <nav className="h-14 border-b border-slate-300 px-[20px] flex items-center justify-between sticky">
      <div className="left flex gap-2">
        <Paragraph prominence="dark" size="normal">
          Journi
        </Paragraph>
      </div>
      <div className="rig flex gap-2">
        <Button
          size="tiny"
          className="w-auto"
          onClick={() => window.location.replace("/journal")}
          intent="success"
        >
          New Entry
        </Button>
        <Button
          size="tiny"
          className="w-auto"
          onClick={async () => {
            const { error } = await supabase.auth.signOut();
            window.location.replace("/");
          }}
        >
          Sign Out
        </Button>
      </div>
    </nav>
  );
};

export default AppHeader;
