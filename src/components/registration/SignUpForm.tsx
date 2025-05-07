"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type FormType = {
  email: string;
  password: string;
};

function SignInForm() {
  const router = useRouter();
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    setAuthError("");

    const storedCurrentUser = localStorage.getItem("currentUser");
    if (storedCurrentUser) {
      const user = JSON.parse(storedCurrentUser);

      if (user.email === data.email && user.password === data.password) {
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/profileUserFromStore/personal_account");
        return;
      } else {
        setAuthError("Неверный пароль");
        return;
      }
    }

    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;

      const user = users.find((u: FormType) => u.email === data.email);

      if (!user) {
        setAuthError("Email не существует");
        return;
      }

      if (user.password !== data.password) {
        setAuthError("Неверный пароль");
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/profileUserFromStore/personal_account");
    } catch (error) {
      console.error("Ошибка сервера. Попробуем данные из localStorage:", error);

      const fallbackUsers = localStorage.getItem("users");

      if (fallbackUsers) {
        const users = JSON.parse(fallbackUsers);
        const user = users.find((u: FormType) => u.email === data.email);

        if (!user) {
          setAuthError("Email не найден (offline)");
          return;
        }

        if (user.password !== data.password) {
          setAuthError("Неверный пароль (offline)");
          return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/profileUserFromStore/personal_account");
      } else {
        setAuthError("Нет доступа к серверу и нет локальных данных");
      }
    }
  };

  return (
    <form
      className="w-full max-w-md mx-auto flex flex-col gap-4 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="mb-1 text-2xl font-medium text-slate-500"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Введите email"
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Некорректный email",
            },
          })}
          className="border p-3 rounded-lg"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="mb-1 text-2xl font-medium text-slate-500"
        >
          Пароль
        </label>
        <input
          id="password"
          type="password"
          placeholder="Введите пароль"
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
          })}
          className="border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {authError && (
        <p className="text-red-600 text-sm text-center">{authError}</p>
      )}

      <button
        type="submit"
        className="mt-4 bg-[#6591b9] text-white p-3 rounded-lg hover:bg-white hover:shadow-[0_0_10px_1px_gray] hover:text-[#6591b9] transition text-xl"
      >
        Войти
      </button>
    </form>
  );
}

export default SignInForm;
