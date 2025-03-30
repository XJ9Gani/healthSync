import { Service } from "../types/MainPageTypes";
import HomeServiceCard from "./HomeServiceCard";

function HomeServicesContainer({ services }: { services: Service[] }) {
  return (
    <section className="h-2/3 grid grid-cols-4 gap-5 mt-7">
      {services.map((el) => (
        <HomeServiceCard service={el} key={el.id} />
      ))}
    </section>
  );
}

export default HomeServicesContainer;
