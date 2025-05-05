"use client";

import { useState } from "react";

type DropDown = {
  id: number;
  item: string;
};

function QuestionnaireInput({
  lable,
  dropDown,
}: {
  lable: string;
  dropDown?: DropDown[];
}) {
  const [show, setShow] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const showDropDown = () => {
    setShow(true);
  };

  const blurDropDown = () => {
    setTimeout(() => setShow(false), 100);
  };

  const handleSelect = (item: string) => {
    setInputValue(item);
    setShow(false);
  };

  return (
    <div className="w-60 relative">
      <p className="text-2xl pl-1">{lable}</p>
      <input
        value={inputValue}
        onFocus={showDropDown}
        onBlur={blurDropDown}
        onChange={(e) => setInputValue(e.target.value)}
        className="border w-full border-gray-500 p-3 rounded-lg focus:border-transparent focus:shadow-[0_0_1px_3px_#656ca3] outline-none transition-all duration-200"
      />

      {dropDown && (
        <section
          className={`${
            show ? "opacity-100" : "opacity-0 pointer-events-none"
          } absolute left-5 top-23 border rounded-lg border-gray-500 transition-all duration-200 bg-white z-10`}
        >
          {dropDown.map((el) => (
            <div
              key={el.id}
              onMouseDown={() => handleSelect(el.item)} // используем onMouseDown вместо onClick, чтобы сработало до blur
              className="py-3 px-16 text-center hover:bg-[#656ca3] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {el.item}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default QuestionnaireInput;
