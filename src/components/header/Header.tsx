"use client";

import HealthAndSafetyOutlineRounded from "../svg/HealthAndSafetyOutlineRounded";
import Auth from "./Auth";
import SingOutButton from "../profile/SingOutButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import usePagination from "@mui/material/usePagination/usePagination";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  const [currentUser, setCurrentUser] = useState<any>();
  useEffect(() => {
    const user = localStorage.getItem("currentUser");

    setCurrentUser(user);
  }, [path]);

  return (
    <header className="h-[10vh] flex justify-between  w-full bg-white opacity-90 fixed top-0 left-0 lg:grid lg:grid-cols-3 shadow-sm z-50 ">
      <div className="px-1  lg:px-10">
        <Link href="/" className="flex items-center">
          <HealthAndSafetyOutlineRounded />
          <h1 className="text-2xl font-bold bg-gradient-to-t from-[#537494] to-[#6591b9] text-transparent bg-clip-text">
            HealthSync{" "}
          </h1>
        </Link>
      </div>
      <div className="items-centerjustify-center gap-5 w-full hidden lg:flex ">
        {currentUser && (
          <>
            <Link
              href={"/"}
              className="text-lg transition-all duration-200 font-normal text-[#537494] border border-transparent p-2 rounded-full lg:hover:text-white lg:hover:border-[#537494] lg:hover:bg-[#7d99bd]"
            >
              Главная
            </Link>

            <Link
              href={"/doctors"}
              className="text-lg transition-all duration-200 font-normal text-[#537494] border border-transparent p-2 rounded-full lg:hover:text-white lg:hover:border-[#537494] lg:hover:bg-[#7d99bd]"
            >
              Список врачей
            </Link>
            <Link
              href={"/"}
              className="text-lg transition-all duration-200 font-normal text-[#537494] border border-transparent p-2 rounded-full lg:hover:text-white lg:hover:border-[#537494] lg:hover:bg-[#7d99bd]"
            >
              О нас
            </Link>
          </>
        )}
      </div>

      <div className="flex justify-center items-center gap-3 pr-2 lg:pr-0">
        <span className="text-lg font-medium bg-gradient-to-t from-[#537494] to-[#6591b9] text-transparent bg-clip-text">
          {" "}
          {currentUser?.name}
        </span>

        <Auth />
      </div>
    </header>
  );
}

export default Header;
