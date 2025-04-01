"use client";

import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <button
      className="font-bold text-white bg-gradient-to-l from-[#537494] to-[#6591b9] transition-all duration-200 cursor-pointer hover:from-[#ffffff] hover:to-[#ffffff] hover:border p-3 w-32 h-14 items-center rounded-full shadow-md  hover:text-[#537494]"
      onClick={() => signOut()}
    >
      Выйти
    </button>
  );
}

export default SignOutButton;
