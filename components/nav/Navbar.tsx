"use client";

import React from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/store/user";
/* import HoverUnderLine from "./HoverUnderLine";
*/

import Profile from "./Profile";

export default function Navbar() {
  const user = useUser((state) => state.user);

  return (
    <nav className="w-full justify-between items-center flex p-5 xl:p-0">
      <div className="group">
        <Link className="text-2xl font-bold" href="/">DailyBlog</Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500">
        </div>
      </div>


      {/*       <HoverUnderLine>
        <Link href={"/"} className="font-bold text-2xl">
          DailyMedia
        </Link>
      </HoverUnderLine>*/}

      {user ? <Profile /> : <LoginForm />}
    </nav>
  );
}
