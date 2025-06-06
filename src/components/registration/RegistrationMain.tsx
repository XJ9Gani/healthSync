"use client";

import RegistrationInput from "@/app/registration/RegistrationInput";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const gender = [
  { id: 1, item: "Мужской" },
  { id: 2, item: "Женский" },
];

const roles = [
  { id: 1, item: "Пациент" },
  { id: 2, item: "Доктор" },
];

type User = {
  firstName: string;
  lastName: string;
  gender: string;
  role: string;
  dob: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function RegistrationMain() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<User>();

  const saveToLocalStorage = (data: User) => {
    const localUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const emailExists = localUsers.some(
      (user: User) => user.email === data.email
    );
    if (emailExists) {
      setError("email", {
        type: "manual",
        message: "Пользователь с таким email уже существует (локально)",
      });
      return;
    }

    const maxIdNum = localUsers.reduce((max: number, user: any) => {
      const match =
        typeof user.id === "string" && user.id.match(/^user-(\d+)$/);
      const num = match ? parseInt(match[1]) : 0;
      return Math.max(max, num);
    }, 0);

    const newUser = { ...data, id: `user-${maxIdNum + 1}` };
    const updatedUsers = [...localUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    router.push("/profileUserFromStore/personal_account");
  };

  const onSubmit = async (data: User) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/users?email=${data.email}`
      );
      if (res.data.length > 0) {
        setError("email", {
          type: "manual",
          message: "Пользователь с таким email уже существует",
        });
        return;
      }

      const allUsersRes = await axios.get("http://localhost:5000/users");
      const allUsers = allUsersRes.data;

      const maxIdNum = allUsers.reduce((max: number, user: any) => {
        const match =
          typeof user.id === "string" && user.id.match(/^user-(\d+)$/);
        const num = match ? parseInt(match[1]) : 0;
        return Math.max(max, num);
      }, 0);

      const newUser = { ...data, id: `user-${maxIdNum + 1}` };

      await axios.post("http://localhost:5000/users", newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      router.push("/profileUserFromStore/personal_account");
    } catch (err) {
      console.warn("Сервер недоступен, сохраняем локально");
      saveToLocalStorage(data);
    }
  };

  return (
    <form className="p-4  mx-auto w-full " onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-medium text-center mb-6">Регистрация</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RegistrationInput
          type="text"
          label="Имя"
          name="firstName"
          register={register("firstName", { required: "Обязательное поле" })}
          error={errors.firstName?.message}
        />
        <RegistrationInput
          type="text"
          label="Фамилия"
          name="lastName"
          register={register("lastName", { required: "Обязательное поле" })}
          error={errors.lastName?.message}
        />
        <RegistrationInput
          type="text"
          label="Пол"
          name="gender"
          dropDown={gender}
          register={register("gender", { required: "Выберите пол" })}
          error={errors.gender?.message}
        />
        <RegistrationInput
          type="text"
          label="Роль в сервисе"
          name="role"
          dropDown={roles}
          register={register("role", { required: "Выберите роль" })}
          error={errors.role?.message}
        />
        <RegistrationInput
          type="date"
          label="Дата Рождения"
          name="dob"
          register={register("dob", { required: "Укажите дату рождения" })}
          error={errors.dob?.message}
        />
        <RegistrationInput
          type="text"
          label="Номер телефона"
          name="phone"
          register={register("phone", { required: "Введите номер телефона" })}
          error={errors.phone?.message}
        />
        <RegistrationInput
          type="email"
          label="Email"
          name="email"
          register={register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Некорректный email",
            },
          })}
          error={errors.email?.message}
        />
        <RegistrationInput
          type="password"
          label="Пароль"
          name="password"
          register={register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
          })}
          error={errors.password?.message}
        />
        <RegistrationInput
          type="password"
          label="Повторите пароль"
          name="confirmPassword"
          register={register("confirmPassword", {
            required: "Подтвердите пароль",
            validate: (value) =>
              value === watch("password") || "Пароли не совпадают",
          })}
          error={errors.confirmPassword?.message}
        />
      </div>
      <input
        type="submit"
        value="Продолжить"
        className="block text-center mx-auto mt-10 border p-4 font-bold text-white bg-gradient-to-l from-[#537494] to-[#6591b9] transition-all duration-200 cursor-pointer hover:from-[#ffffff] hover:to-[#ffffff] hover:border items-center rounded-full shadow-md hover:text-[#537494]"
      />
    </form>
  );
}

export default RegistrationMain;
