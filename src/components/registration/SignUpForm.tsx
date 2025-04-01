"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../shared/Input";

interface FormType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUpForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);
  return (
    <form
      className="mb-10 w-full mx-auto flex flex-col items-center gap-2 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="name"
        placeholder="Имя"
        register={register}
        rule={{ required: "Имя обязательно" }}
        error={errors.name?.message || null}
      />
      <Input
        label="email"
        placeholder="Email"
        register={register}
        rule={{ required: "Имя обязательно" }}
        error={errors.email?.message || null}
      />
      <Input
        label="password"
        type="password"
        placeholder="Пороль"
        register={register}
        rule={{ required: "Имя обязательно" }}
        error={errors.password?.message || null}
      />
      <Input
        label="confirmPassword"
        placeholder="Повторить пороль"
        register={register}
        rule={{ required: "Имя обязательно" }}
        error={errors.confirmPassword?.message || null}
      />
      <input
        type="submit"
        className="mt-7 border border-gray-500 mx-auto w-1/5 py-4 shadow-md rounded-lg flex items-center cursor-pointer hover:shadow-xl transition-all duration-200"
      />
    </form>
  );
}

export default SignUpForm;
