"use client";

import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { UserFromStorageType } from "../types/UserFromStorage";
import ArrowRight from "../svg/ArrowRight";
import { usePathname } from "next/navigation";

function UserFromStorage({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [show, setShow] = useState<boolean>(false);
  const [userFromStorage, setUserFromStorage] =
    useState<UserFromStorageType | null>(null);

  const handleMenuShow = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    setShow(false);
  }, [path]);
  useEffect(() => {
    const userStr = localStorage.getItem("currentUser");
    setUserFromStorage(JSON.parse(userStr || "{}"));
  }, []);

  if (!userFromStorage) {
    return <div>Загрузка профиля...</div>;
  }

  return (
    <div className="relative flex">
      <div
        onClick={handleMenuShow}
        className="fixed top-1/2 -left-3  shadow-[0px_0px_5px_1px_gray] p-3 rounded-lg bg-white cursor-pointer z-40"
      >
        <ArrowRight />
      </div>
      <ProfileMenu
        user={userFromStorage}
        show={show}
        handleMenuShow={handleMenuShow}
      />

      <main className="flex-1  ">{children}</main>
    </div>
  );
}

export default UserFromStorage;
