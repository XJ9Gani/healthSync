"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function MobileMenu() {
  const path = usePathname();
  const [currentUser, setCurrentUser] = useState<any>();
  useEffect(() => {
    const user = localStorage.getItem("currentUser");

    setCurrentUser(user);
  }, [path]);
  return (
    <header className="shadow-[0_0_10px_1px_gray] flex justify-around lg:hidden fixed bottom-0 left-0 p-3 w-full bg-white">
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
    </header>
  );
}

export default MobileMenu;
