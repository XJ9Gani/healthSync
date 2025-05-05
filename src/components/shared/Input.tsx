import { UseFormRegister } from "react-hook-form";
import { FormType } from "../types/FormType";

function Input({
  label,
  placeholder,
  type,
  rule,
  register,
  error,
}: {
  label: keyof FormType;
  placeholder?: string;
  type?: string;
  rule: object;
  register: UseFormRegister<FormType>;
  error: string | null;
}) {
  return (
    <div className="w-1/2 relative">
      <p className=" mx-auto p-2 w-1/2 uppercase text-lg font-medium">
        {label}
      </p>
      <input
        type={type}
        placeholder={placeholder}
        className={`
          ${error && "shadow-[0_0_0_3px_#e92525] border-transparent"}
          block border mx-auto p-3 w-1/2 rounded-lg transition-all duration-200 focus:shadow-[0_0_0_3px_#537494] focus:outline-none focus:border-transparent`}
        {...register(label, rule)}
      />
      {error && (
        <p className="absolute right-10 top-1/2 text-red-500">{error}</p>
      )}
    </div>
  );
}

export default Input;
