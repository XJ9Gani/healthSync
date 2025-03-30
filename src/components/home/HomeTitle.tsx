import Button from "../shared/Button";

function HomeTitle() {
  return (
    <section className="my-12 h-5/6 w-1/2 flex flex-col justify-around">
      <p className="text-[56px] leading-none bg-gradient-to-t from-[#537494] to-[#6591b9] bg-clip-text text-transparent text-4xl font-bold">
        Цифровая платформа для мониторинга здоровья
      </p>
      <p className="text-lg text-white font-semibold tracking-wide">
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
