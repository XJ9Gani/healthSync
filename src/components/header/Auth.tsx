import Button from "../shared/Button";

function Auth() {
  return (
    <div className="flex justify-center items-center gap-3">
      <Button
        className="font-bold text-white bg-gradient-to-l from-[#537494] to-[#6591b9] transition-all duration-200 cursor-pointer hover:from-[#ffffff] hover:to-[#ffffff] hover:border p-3 w-32 h-14 items-center rounded-full shadow-md  hover:text-[#537494]"
        text="Регистрация"
      />
      <Button
        className="font-bold bg-white transition-all duration-200 cursor-pointer hover:bg-gradient-to-l hover:from-[#537494] hover:to-[#6591b9] p-3 w-32 h-14 items-center rounded-full shadow-md  hover:text-[#537494]"
        text="Войти"
      />
    </div>
  );
}

export default Auth;
