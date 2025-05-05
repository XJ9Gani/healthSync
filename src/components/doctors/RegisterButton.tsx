"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { CurrentUserType } from "../types/CurrentUserType";

type RegisterButtonProps = {
  doctorId: number | undefined;
};

export default function RegisterButton({ doctorId }: RegisterButtonProps) {
  const [user, setUser] = useState<CurrentUserType | null>(
    JSON.parse(localStorage.getItem("currentUser") || "{}")
  );
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    console.log(user);
    setUser(JSON.parse(currentUser || "{}"));
  }, []);

  const handleRegister = async () => {
    setLoading(true);
    setSuccess(false);

    try {
      // Получаем информацию о докторе
      const doctorRes = await axios.get(
        `http://localhost:5000/doctors/${doctorId}`
      );
      const doctorData = doctorRes.data;

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

      // Получаем текущего пользователя
      const res = await axios.get(
        `http://localhost:5000/users/${String(user?.id)}`
      );
      const userC = res.data;

      if (!userC) {
        throw new Error("Пользователь не найден");
      }

      // Обновляем пользователя
      const updatedUser = {
        ...userC,
        appointments: [...(userC.appointments || []), newAppointment],
      };

      const updateRes = await axios.patch(
        `http://localhost:5000/users/${user?.id}`,
        updatedUser
      );

      if (updateRes.status !== 200) {
        throw new Error("Не удалось обновить пользователя");
      }

      localStorage.setItem("currentUser", JSON.stringify(updateRes.data));
      setUser(updateRes.data);

      setSuccess(true);
      alert("Запись на приём успешно добавлена!");
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
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {loading ? "Запись..." : "Записаться на приём"}
    </button>
  );
}
