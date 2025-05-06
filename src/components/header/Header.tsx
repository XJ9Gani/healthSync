import { auth } from "@/components/userFromStorage/config/auth";
import HealthAndSafetyOutlineRounded from "../svg/HealthAndSafetyOutlineRounded";
import Auth from "./Auth";
import SingOutButton from "../profile/SingOutButton";
import Link from "next/link";

async function Header() {
  const session = await auth();
  const user = session?.user;
  return (
    <header className="h-[10vh] w-full bg-white opacity-90 fixed top-0 left-0 grid grid-cols-3 shadow-sm z-50 ">
      <div className=" px-10">
        <Link href="/" className="flex items-center">
          <HealthAndSafetyOutlineRounded />
          <h1 className="text-2xl font-bold bg-gradient-to-t from-[#537494] to-[#6591b9] text-transparent bg-clip-text">
            HealthSync{" "}
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5 w-full ">
        {user && <></>}
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
          href={"/about"}
          className="text-lg transition-all duration-200 font-normal text-[#537494] border border-transparent p-2 rounded-full lg:hover:text-white lg:hover:border-[#537494] lg:hover:bg-[#7d99bd]"
        >
          О нас
        </Link>
      </div>

      <div className="flex justify-center items-center gap-3">
        <span className="text-lg font-medium bg-gradient-to-t from-[#537494] to-[#6591b9] text-transparent bg-clip-text">
          {" "}
          {user?.name}
        </span>
        {user ? (
          <>
            <SingOutButton />
          </>
        ) : (
          <Auth />
        )}
      </div>
    </header>
  );
}

export default Header;
