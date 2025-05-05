// "use client";

// import { ChangeEvent, useState } from "react";

// type DropDown = {
//   id: number;
//   item: string;
// };

// interface InputProps {
//   label: string;
//   name: string;
//   dropDown?: DropDown[];
//   type: string;
//   selectInput: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
// }

// function RegistrationInput({
//   label,
//   type,
//   dropDown,
//   selectInput,
//   name,
// }: InputProps) {
//   const [show, setShow] = useState<boolean>(false);
//   const [inputValue, setInputValue] = useState<string>("");

//   const handleShow = (state: boolean) => setShow(state);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setInputValue(e.target.value);
//     selectInput(e);
//   };

//   const handleSelect = (item: string) => {
//     setInputValue(item);
//     selectInput({
//       target: { name, value: item },
//     } as ChangeEvent<HTMLInputElement>);
//     setShow(false);
//   };

//   return (
//     <div className="relative pt-4">
//       <p
//         className={`${
//           show || inputValue ? "block" : "hidden"
//         } text-xs lowercase ml-6 absolute left-1 font-medium tracking-wider text-slate-500`}
//       >
//         {label}
//       </p>
//       <input
//         name={name}
//         type={type}
//         value={inputValue}
//         onChange={handleChange}
//         onFocus={() => handleShow(true)}
//         onBlur={() => handleShow(false)}
//         placeholder={show ? "" : label}
//         className="border block mx-auto w-11/12 border-gray-500 p-3 py-4 rounded-lg focus:border-transparent capitalize focus:shadow-[0_0_1px_3px_#656ca3] outline-none transition-all duration-200"
//       />

//       {dropDown && (
//         <section
//           className={`${
//             show ? "opacity-100" : "opacity-0 pointer-events-none"
//           } absolute left-4 top-20 border rounded-lg border-gray-500 transition-all duration-200 bg-white z-10`}
//         >
//           {dropDown.map((el) => (
//             <div
//               key={el.id}
//               onMouseDown={() => handleSelect(el.item)}
//               className="last:border-none border-b py-3 font-medium px-36 w-full text-center hover:bg-[#656ca3] hover:text-white transition-all duration-300 cursor-pointer"
//             >
//               {el.item}
//             </div>
//           ))}
//         </section>
//       )}
//     </div>
//   );
// }

// export default RegistrationInput;

"use client";

import { UseFormRegisterReturn } from "react-hook-form";

type DropDown = {
  id: number;
  item: string;
};

interface InputProps {
  label: string;
  name: string;
  dropDown?: DropDown[];
  type: string;
  register: UseFormRegisterReturn;
  error?: string;
}

function RegistrationInput({
  label,
  type,
  dropDown,
  name,
  register,
  error,
}: InputProps) {
  return (
    <div className="relative pt-4 px-2">
      <label
        className="block text-sm font-medium text-gray-700 mb-1"
        htmlFor={name}
      >
        {label}
      </label>

      {dropDown ? (
        <select
          id={name}
          {...register}
          className="border w-full border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Выберите...</option>
          {dropDown.map((option) => (
            <option key={option.id} value={option.item}>
              {option.item}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          {...register}
          className="border w-full border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder={label}
        />
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default RegistrationInput;
