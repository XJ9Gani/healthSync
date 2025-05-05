"use client";

import EmergencyContacts from "@/components/QuestionarySteps/EmergencyContacts";
import Information from "@/components/QuestionarySteps/Information";
import LifeStyleInfo from "@/components/QuestionarySteps/LifeStyleInfo";
import MedicalHistory from "@/components/QuestionarySteps/MedicalHistory";
import { UserFromStorageType } from "@/components/types/UserFromStorage";
import { useEffect, useState } from "react";

function MedicalQuestionnaire() {
  const [count, setCount] = useState<number>(1);
  const [user, setUser] = useState<UserFromStorageType | null>(null);

  const nextStep = () => {
    setCount((prev) => prev + 1);
  };
  const prevStep = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    const getUser = localStorage.getItem("currentUser");
    setUser(JSON.parse(getUser || "null"));
  }, []);

  return (
    <>
      {user ? (
        <section className="h-full pt-32 pl-5">
          {/* <div className="flex gap-10 ">
            <div className="size-40 rounded-full bg-[#C8BCF6]  flex justify-center items-center shadow">
              <h1 className="text-[3rem] text-white uppercase">
                {user.firstName[0]}
              </h1>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <p className="text-md font-medium text-[#5f7187]">
                <span className="font-bold  text-[#32495E]">Роль:</span>{" "}
                {user.role}
              </p>
              <p className="text-md font-medium text-[#5f7187]">
                <span className="font-bold text-[#32495E]">ФИО :</span>{" "}
                {user.firstName} {user.lastName}
              </p>
              <p className="text-md font-medium text-[#5f7187]">
                <span className="font-bold text-[#32495E]">Email:</span>{" "}
                {user.email}
              </p>
            </div>
          </div> */}

          <div className="">
            <div>
              {count === 1 && <Information />}
              {count === 2 && <MedicalHistory />}
              {count === 3 && <LifeStyleInfo />}
            </div>
            <div className=" p-10 flex justify-between">
              <button
                onClick={prevStep}
                disabled={count === 1}
                className="disabled:from-gray-100 disabled:to-gray-100  disabled:pointer-events-none font-bold text-white bg-gradient-to-l from-[#537494] to-[#6591b9] transition-all duration-200 cursor-pointer hover:from-[#ffffff] hover:to-[#ffffff] hover:border p-3 w-32 h-14 items-center rounded-full shadow-md  hover:text-[#537494]"
              >
                Назад
              </button>
              <button
                onClick={nextStep}
                disabled={count === 3}
                className="disabled:from-gray-100 disabled:to-gray-100  disabled:pointer-events-none font-bold text-white bg-gradient-to-l from-[#537494] to-[#6591b9] transition-all duration-200 cursor-pointer hover:from-[#ffffff] hover:to-[#ffffff] hover:border p-3 w-32 h-14 items-center rounded-full shadow-md  hover:text-[#537494]"
              >
                Продолжить
              </button>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default MedicalQuestionnaire;
