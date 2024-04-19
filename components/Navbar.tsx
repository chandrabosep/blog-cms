import { Webhook } from "lucide-react";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-b border-black dark:border-white">
      <div className="max-w-screen-2xl w-11/12 mx-auto py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1.5">
          <Webhook className="w-6 h-6" />
          <h4 className="text-xl font-semibold">Dev Blog</h4>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}
