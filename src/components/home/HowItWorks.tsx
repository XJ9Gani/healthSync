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
    <section className="h-[80vh] bg-gradient-to-b from-[#537494] to-[#6591b9] py-10">
      <h1 className="pl-32 text-[56px] text-white font-semibold text-3xl bg-gradient-to-b  py-6 uppercase">
        Как это работает?
      </h1>

      <div className="flex h-2/3 my-16">
        <div className="pl-32 h-2/3 w-1/2 flex flex-col gap-8 justify-center">
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
