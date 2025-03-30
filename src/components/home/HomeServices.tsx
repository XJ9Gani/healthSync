import Button from "../shared/Button";
import { Service } from "../types/MainPageTypes";
import HomeServicesContainer from "./HomeServicesContainer";

function HomeServices({ services }: { services: Service[] }) {
  return (
    <section className="h-[80vh] bg-[#32495E] px-32 py-16">
      <h1 className="uppercase text-4xl text-white font-semibold">
        Как мы помогаем вам заботиться о здоровье?
      </h1>
      <HomeServicesContainer services={services} />
      <Button
        className="border-black bg-white text-black px-3 py-3 rounded-full w-1/5 transition-all duration-300 cursor-pointer  mx-auto block mt-10 lg:hover:bg-white lg:hover:text-black"
        text="Все услуги"
      />
    </section>
  );
}

export default HomeServices;
