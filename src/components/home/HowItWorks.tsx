import { HowItWorkItem } from "../types/MainPageTypes";
import HowItWorksItem from "./HowItWorksItem";

const links: HowItWorkItem[] = [
  { id: 1, text: "Регистрация (ввод данных)", href: "/" },
  { id: 2, text: "Заполнение анкеты o здоровье", href: "/" },
  { id: 3, text: "Получение персональных рекомендаций", href: "/" },
  { id: 4, text: "Использование чата, напоминаний и анализа", href: "/" },
];

function HowItWorks() {
  return (
    <section className="hidden lg:block h-[80vh] bg-gradient-to-b from-[#537494] to-[#6591b9] py-10">
      <h1 className="lg:pl-32 lg:text-[56px] text-white font-semibold text-[36px]  bg-gradient-to-b  py-6 uppercase text-center lg:text-start">
        Как это работает?
      </h1>

      <div className="flex flex-col lg:flex-row h-2/3 my-16">
        <div className="lg:pl-32 h-2/3 lg:w-1/2 flex flex-col gap-8 justify-center">
          {links.map((el) => (
            <HowItWorksItem el={el} key={el.id} />
          ))}
        </div>
        <div className="w-1/2">
          <h2 className="text-white text-2xl">Ответ:</h2>
          <span className="pr-32 text-white text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sint
            voluptatem quia, fuga ab debitis amet illum dolores nesciunt
            temporibus earum doloribus veniam minima libero cupiditate maxime
            dolorem velit recusandae.
          </span>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
