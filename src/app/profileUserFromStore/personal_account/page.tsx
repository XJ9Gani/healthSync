"use client";

import { CurrentUserType } from "@/components/types/CurrentUserType";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

function PersonalAccount() {
  const [currentUser, setCurrentUser] = useState<CurrentUserType | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser);
    }
  }, []);

  const handleDeleteAppointment = async (indexToDelete: number) => {
    if (!currentUser) return;

    const updatedAppointments = currentUser.appointments?.filter(
      (_, index) => index !== indexToDelete
    );

    const updatedUser = {
      ...currentUser,
      appointments: updatedAppointments || [],
    };

    try {
      await axios.patch(`http://localhost:5000/users/${currentUser.id}`, {
        appointments: updatedUser.appointments,
      });

      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);
    } catch (error) {
      console.error("Ошибка при обновлении данных:", error);
    }
  };

  return (
    <section className="h-full">
      <div className="relative pt-32 pl-5 bg-gradient-to-l from-[rgba(93,123,168,0.5)] to-[rgba(43,117,187,0.5)] h-80">
        <h1
          className="absolute bottom-1 left-48 text-[2.5rem] font-medium text-white"
          style={{ textShadow: "0px 0px 10px gray" }}
        >
          Добро пожаловать , {currentUser?.firstName} {currentUser?.lastName}
        </h1>
        <div className="absolute -bottom-13 left-5  size-40 rounded-full border-[4px] border-[#F8FAFC] bg-[#bfdafd] shadow-md flex items-center justify-center">
          <p className="text-[3rem] text-white font-medium">
            {currentUser?.firstName[0]}
          </p>
        </div>
      </div>

      <div className="h-[80vh] mt-10 border-b">
        <h1 className="text-4xl p-10  font-bold text-[#6e8caa]">
          Состояние здоровья
        </h1>

        <div className=" rounded-2xl bg-white h-[50vh] w-[95vw] mx-auto shadow-[0px_0px_4px_1px_gray] flex items-center justify-center">
          <p className="text-[1.5rem] font-light">Информация отсутсвует</p>
        </div>
      </div>

      <div className="h-[80vh] border-b">
        <h1 className="text-4xl p-10  font-bold text-[#6e8caa]">
          Список назначений
        </h1>

        <div className=" rounded-2xl bg-white h-[50vh] w-[95vw] mx-auto shadow-[0px_0px_4px_1px_gray] flex items-center justify-center">
          <div className="rounded-2xl bg-white h-[50vh] w-[95vw] mx-auto shadow-[0px_0px_4px_1px_gray]">
            {currentUser?.appointments?.length ? (
              <>
                <h1 className="text-[2rem] p-4">Ваши записи:</h1>
                <div className="pl-10 flex h-3/4 items-center gap-3 flex-wrap overflow-hidden overflow-y-auto">
                  {currentUser.appointments.map((el, index) => {
                    const formattedDate = new Date(el.date).toLocaleString(
                      "ru-RU",
                      {
                        timeZone: "Europe/Moscow",
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    );
                    return (
                      <div
                        key={index}
                        className="shadow-[0_0_10px_1px_gray] w-1/3 h-full border rounded-2xl flex flex-col items-center justify-between p-4"
                      >
                        <h1 className="text-[2rem] text-[#537394] text-center font-medium ">
                          {el.doctorName}
                        </h1>
                        <span className="text-center text-[#537394]">
                          {el.description}
                        </span>
                        <span className="text-center text-[#537394]">
                          {formattedDate}
                        </span>
                        <button
                          onClick={() => handleDeleteAppointment(index)}
                          className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        >
                          Отменить запись
                        </button>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <p className="text-[1.5rem] font-light text-center pt-10">
                Список пуст
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="h-[80vh] border-b">
        <h1 className="text-4xl p-10  font-bold text-[#6e8caa]">
          Дневник Здоровья
        </h1>

        <div className=" rounded-2xl bg-white h-[50vh] w-[95vw] mx-auto shadow-[0px_0px_4px_1px_gray] flex items-center justify-center">
          <p className="text-[1.5rem] font-light">Информация отсутсвует</p>
        </div>
      </div>

      <div className="h-[80vh] border-b">
        <h1 className="text-4xl p-10 font-bold text-[#6e8caa]">
          Ближайшие Консультации
        </h1>

        <div className="rounded-2xl bg-white h-[50vh] w-[95vw] mx-auto shadow-[0px_0px_4px_1px_gray]">
          {currentUser?.appointments?.length ? (
            <>
              <h1 className="text-[2rem] p-4">Ваши записи:</h1>
              <div className="pl-10 flex h-3/4 items-center gap-3 flex-wrap overflow-hidden overflow-y-auto">
                {currentUser.appointments.map((el, index) => {
                  const formattedDate = new Date(el.date).toLocaleString(
                    "ru-RU",
                    {
                      timeZone: "Europe/Moscow",
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  );
                  return (
                    <div
                      key={index}
                      className="shadow-[0_0_10px_1px_gray] w-1/3 h-full border rounded-2xl flex flex-col items-center justify-between p-4"
                    >
                      <h1 className="text-[2rem] text-[#537394] text-center font-medium ">
                        {el.doctorName}
                      </h1>
                      <span className="text-center text-[#537394]">
                        {el.description}
                      </span>
                      <span className="text-center text-[#537394]">
                        {formattedDate}
                      </span>
                      <button
                        onClick={() => handleDeleteAppointment(index)}
                        className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Отменить запись
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <p className="text-[1.5rem] font-light text-center pt-10">
              Список пуст
            </p>
          )}
        </div>
      </div>
      <div className="h-[80vh] border-b">
        <h1 className="text-4xl p-10  font-bold text-[#6e8caa]">
          Советы и Рекомендации
        </h1>

        <div className=" rounded-2xl bg-white h-[50vh] w-[95vw] mx-auto shadow-[0px_0px_4px_1px_gray] flex items-center justify-center">
          <p className="text-[1.5rem] font-light">Информация отсутсвует</p>
        </div>
      </div>
    </section>
  );
}

export default PersonalAccount;
