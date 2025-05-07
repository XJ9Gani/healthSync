import { Service } from "../types/MainPageTypes";
import HomeServiceCard from "./HomeServiceCard";

function HomeServicesContainer({ services }: { services: Service[] }) {
  return (
    <section className=" lg:h-2/3 grid grid-cols-1 lg:grid-cols-4 lg:gap-5 lg:mt-7">
      {services.map((el) => (
        <HomeServiceCard service={el} key={el.id} />
      ))}
    </section>
  );
}

export default HomeServicesContainer;
