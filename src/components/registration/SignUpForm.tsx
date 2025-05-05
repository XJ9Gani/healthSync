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
    setAuthError(""); // очистка ошибки

    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;

      const user = users.find((u: FormType) => u.email === data.email);

      localStorage.setItem("currentUser", JSON.stringify(user));
      if (!user) {
        setAuthError("Email не существует");
        return;
      }

      if (user.password !== data.password) {
        setAuthError("Неверный пароль");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      router.push("/profileUserFromStore/personal_account");
    } catch (error) {
      console.error(error);
      setAuthError("Ошибка сервера");
    }
  };

  return (
    <form
      className="w-full max-w-md mx-auto flex flex-col gap-4 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1">
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
          className="border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="mb-1">
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
        className="mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Войти
      </button>
    </form>
  );
}

export default SignInForm;
