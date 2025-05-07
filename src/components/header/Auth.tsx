"use client";

import Link from "next/link";
import Button from "../shared/Button";
import { useEffect, useState } from "react";
import Person from "../svg/Person";
import { PersonAdd } from "../svg/PersonAdd";
import { LogIn } from "lucide-react";

function Auth() {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    const getUser = localStorage.getItem("currentUser");
    setUser(getUser);
  });

  const exitHandle = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };
  return (
    <>
      {user ? (
        <>
          <Link
            href="/profileUserFromStore/personal_account"
            className="border p-3 rounded-lg border-[#6591b9] shadow-lg lg:hover:shadow-[0_0_1px_1px_black]"
          >
            <Person />
          </Link>
          <Link href="/profile">
            <button
              onClick={exitHandle}
              className="hidden lg:block text-[#6591b9] border border-[#6591b9] font-bold bg-white transition-all duration-200 cursor-pointer lg:hover:bg-gradient-to-l lg:hover:from-[#537494] lg:hover:to-[#6591b9] p-3 w-32 h-14 items-center rounded-full shadow-md  lg:hover:text-white"
            >
              Выйти
            </button>
            <button
              onClick={exitHandle}
              className="block lg:hidden text-[#6591b9] border border-[#6591b9] font-bold bg-white transition-all duration-200 cursor-pointer lg:hover:bg-gradient-to-l lg:hover:from-[#537494] lg:hover:to-[#6591b9] p-3 items-center rounded-lg shadow-md  lg:hover:text-white"
            >
              <LogIn />
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link href="/registration">
            <Button
              className="hidden lg:block font-bold text-white bg-gradient-to-l from-[#537494] to-[#6591b9] transition-all duration-200 cursor-pointer lg:hover:from-[#ffffff] lg:hover:to-[#ffffff] lg:hover:border p-3 w-32 h-14 items-center rounded-full shadow-md  lg:hover:text-[#537494]"
              text="Регистрация"
            />
            <Button
              className="block lg:hidden font-bold text-white bg-gradient-to-l from-[#537494] to-[#6591b9] transition-all duration-200 cursor-pointer lg:hover:from-[#ffffff] lg:hover:to-[#ffffff] lg:hover:border   p-4  items-center rounded-lg shadow-md  lg:hover:text-[#537494]"
              text={<PersonAdd />}
            />
          </Link>
          <Link href="/profile" className="pr-5 lg:pr-0">
            <Button
              className="hidden lg:block text-[#6591b9] border border-[#6591b9] font-bold bg-white transition-all duration-200 cursor-pointer lg:hover:bg-gradient-to-l lg:hover:from-[#537494] lg:hover:to-[#6591b9] p-3 w-32 h-14 items-center rounded-full shadow-md  lg:hover:text-white"
              text="Войти"
            />

            <Button
              className="block lg:hidden text-[#6591b9] border border-[#6591b9] font-bold bg-white transition-all duration-200 cursor-pointer lg:hover:bg-gradient-to-l lg:hover:from-[#537494] lg:hover:to-[#6591b9] p-4 items-center rounded-lg shadow-md  lg:hover:text-white"
              text={<LogIn />}
            />
          </Link>
        </>
      )}
    </>
  );
}

export default Auth;
