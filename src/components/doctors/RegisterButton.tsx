"use client";

import { useEffect, useState } from "react";
import { CurrentUserType } from "../types/CurrentUserType";

type RegisterButtonProps = {
  doctorId: number | undefined;
};

export default function RegisterButton({ doctorId }: RegisterButtonProps) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUser = localStorage.getItem("currentUser");
      setUser(currentUser ? JSON.parse(currentUser) : null);
    }
  }, []);

  const handleRegister = async () => {
    setLoading(true);
    setSuccess(false);

    try {
      // Получаем информацию о докторе с сервера
      const doctorData = {
        id: doctorId, // Симулируем данные доктора для работы с localStorage
        name: "Айдана Бакытова",
        specialty: "Педиатр",
        description:
          "Опытная педиатр, работает с грудничками и детьми младшего возраста.",
      };

      if (!doctorData) {
        throw new Error("Доктор не найден");
      }

      // Создаём новую запись
      const newAppointment = {
        doctorId: doctorData.id,
        doctorName: doctorData.name,
        specialty: doctorData.specialty,
        description: doctorData.description,
        date: new Date().toISOString(),
      };

      // Если пользователь есть в localStorage
      if (user) {
        const updatedUser = {
          ...user,
          appointments: [...(user.appointments || []), newAppointment],
        };

        // Обновляем пользователя в LocalStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        }
        setUser(updatedUser);

        setSuccess(true);
        alert("Запись на приём успешно добавлена!");
      } else {
        // Если пользователя нет в localStorage, работаем с сервером
        const userC = {
          id: user?.id, // Симулируем данные пользователя для работы с localStorage
          appointments: [],
        };

        if (!userC) {
          throw new Error("Пользователь не найден");
        }

        // Обновляем пользователя на сервере
        const updateRes = {
          status: 200,
          data: {
            ...userC,
            appointments: [...(userC.appointments || []), newAppointment],
          },
        };

        if (updateRes.status !== 200) {
          throw new Error("Не удалось обновить пользователя");
        }

        // Обновляем данные в LocalStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("currentUser", JSON.stringify(updateRes.data));
        }
        setUser(updateRes.data);

        setSuccess(true);
        alert("Запись на приём успешно добавлена!");
      }
    } catch (error) {
      console.error("Ошибка при добавлении записи:", error);
      alert(`Не удалось записаться на приём. Ошибка: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleRegister}
      disabled={loading}
      className="w-full mt-4 px-4 py-4 bg-[#658d9c] text-white rounded-lg lg:hover:bg-[#8291c2] transition-all duration-200"
    >
      {loading ? "Запись..." : "Записаться на приём"}
    </button>
  );
}
