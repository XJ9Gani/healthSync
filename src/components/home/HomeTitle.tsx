import Button from "../shared/Button";

function HomeTitle() {
  return (
    <section className="mt-14 lg:mt-12 h-fit lg:h-5/6 w-full lg:w-1/2 flex flex-col justify-around gap-5">
      <p className="pl-5 lg:pl-0 text-center lg:text-start text-[36px] lg:text-[56px]  leading-none bg-gradient-to-t from-[#537494] to-[#6591b9] bg-clip-text text-transparent font-bold">
        Цифровая платформа для мониторинга здоровья
      </p>
      <p className=" text-center lg:text-start lg:text-[26px]  text-[#6591b9] font-semibold ">
        Помогаем следить за здоровьем, вовремя принимать лекарства и
        взаимодействовать с врачами
      </p>

      <Button
        className="border border-white px-3 py-3 rounded-full w-1/3 transition-all duration-300 cursor-pointer text-white lg:hover:bg-white lg:hover:text-black"
        text="Попробовать бесплатно"
      />
    </section>
  );
}

export default HomeTitle;
