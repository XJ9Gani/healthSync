"use client";

import { useEffect, useState } from "react";

interface Medications {
  name: string;
  time: string;
  dosageCount: number;
  afterWhat: string;
}

function InteractiveMedList() {
  const [currentEmail, setCurrentEmail] = useState<string | null>(null);
  const [list, setList] = useState<Medications[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [medName, setMedName] = useState("");
  const [time, setTime] = useState("");
  const [dosageCount, setDosageCount] = useState<number>(1);
  const [afterWhat, setAfterWhat] = useState("");

  const openTimeSetter = () => {
    setShowForm(true);
  };

  const handleAdd = async () => {
    if (!medName || !time || !afterWhat || !dosageCount) return;

    const newItem: Medications = {
      name: medName,
      time,
      dosageCount,
      afterWhat,
    };
    const updatedList = [...list, newItem];

    try {
      const res = await fetch(
        `http://localhost:5000/users?email=${currentEmail}`
      );
      const users = await res.json();

      if (users.length === 0) {
        console.error("Пользователь не найден");
        return;
      }

      const user = users[0];

      const updatedUser = {
        ...user,
        medications: updatedList,
      };

      // Пушим ПОЛНОСТЬЮ обновлённый объект юзера
      await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      setList(updatedList);
      setMedName("");
      setTime("");
      setDosageCount(1);
      setAfterWhat("");
      setShowForm(false);
    } catch (error) {
      console.error("Ошибка при обновлении пользователя:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = JSON.parse(
          localStorage.getItem("currentUser") || "{}"
        );
        const email = currentUser.email;

        if (!email) {
          console.error("Email пользователя не найден");
          return;
        }

        setCurrentEmail(email);

        const res = await fetch(`http://localhost:5000/users?email=${email}`);
        const users = await res.json();

        if (users.length === 0) {
          console.error("Пользователь не найден");
          return;
        }

        const user = users[0];

        if (user.medications && Array.isArray(user.medications)) {
          setList(user.medications);
        } else {
          setList([]);
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных пользователя:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleDelete = async (indexToRemove: number) => {
    try {
      const res = await fetch(
        `http://localhost:5000/users?email=${currentEmail}`
      );
      const users = await res.json();
      if (users.length === 0) {
        console.error("Пользователь не найден");
        return;
      }

      const user = users[0];
      const updatedList = list.filter((_, index) => index !== indexToRemove);

      const updatedUser = {
        ...user,
        medications: updatedList,
      };

      await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      setList(updatedList);
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };
  return (
    <section className="mt-5">
      <h1 className="text-xl text-center lg:text-start lg:text-3xl font-medium text-black ">
        Список приёмов медикаментов
      </h1>

      <div className="flex flex-col gap-5 items-center lg:items-start lg:flex-row mt-2">
        <ul className="border w-11/12 h-96 lg:w-3/4 rounded-lg bg-white border-gray-400 shadow-xl overflow-auto ">
          {list.length === 0 ? (
            <p className="text-[2rem] text-[#777777] font-normal text-center pt-16">
              Список пуст
            </p>
          ) : (
            list.map((item, index) => (
              <li
                key={index}
                className="text-lg border-b w-full min-h-32 flex justify-start border-gray-400 px-4  relative"
              >
                <div className=" flex flex-col items-center justify-center text-xl font-semibold border-r px-10 min-w-1/4">
                  <span> 💊{item.name}</span>
                </div>
                <div className=" flex flex-col items-center justify-center text-xl font-semibold border-r px-10 min-w-1/4">
                  <span> ⏰ Время: {item.time}</span>
                </div>
                <div className=" flex flex-col items-center justify-center text-xl font-semibold border-r px-10 min-w-1/4">
                  <span> ⏰ 📆 Частота: {item.dosageCount} раз(а) в день</span>
                </div>
                <div className=" flex flex-col items-center justify-center text-xl font-semibold  px-10 min-w-1/4">
                  <span>🍽 После: {item.afterWhat}ь</span>
                </div>

                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl"
                  title="Удалить приём"
                >
                  🗑
                </button>
              </li>
            ))
          )}
        </ul>

        <button
          onClick={openTimeSetter}
          className="w-11/12 lg:w-fit px-4 mx-4 h-20 font-bold text-white bg-gradient-to-l from-[#537494] to-[#6591b9] transition-all duration-200 cursor-pointer lg:hover:from-[#ffffff] lg:hover:to-[#ffffff] items-center rounded-lg lg:rounded-full shadow-md lg:hover:text-[#537494]"
        >
          Добавить приём
        </button>
      </div>

      {showForm && (
        <div className="absolute flex items-center justify-center top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)]">
          <div className="mt-4 border p-10 rounded-lg shadow-md bg-gray-100 w-[70%] h-[50%]">
            <h2 className="text-xl font-semibold mb-2">Новый приём</h2>
            <input
              type="text"
              value={medName}
              onChange={(e) => setMedName(e.target.value)}
              placeholder="Название медикамента"
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="number"
              value={dosageCount}
              onChange={(e) => setDosageCount(Number(e.target.value))}
              min={1}
              className="border p-2 rounded w-full mb-2"
              placeholder="Сколько раз в день"
            />
            <input
              type="text"
              value={afterWhat}
              onChange={(e) => setAfterWhat(e.target.value)}
              placeholder="После чего принимать (например, еды)"
              className="border p-2 rounded w-full mb-2"
            />
            <button
              onClick={handleAdd}
              className="bg-blue-500 text-white px-4 py-2 rounded lg:hover:bg-blue-600"
            >
              Добавить
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default InteractiveMedList;
