import ServiceCardIcon from "../svg/ServiceCardIcon";
import { Service } from "../types/MainPageTypes";
import Image from "next/image";

function HomeServiceCard({ service }: { service: Service }) {
  return (
    <div className="h-fit lg:h-5/6 ">
      <div className="h-1/3 relative">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white">
          <ServiceCardIcon />
        </span>
        <Image
          src="/stethoscope.jfif"
          alt="img"
          width={500}
          height={500}
          className="h-full object-cover opacity-50"
        />
      </div>
      <div className="h-1/3 p-4 bg-white">
        <h3 className="text-lg font-semibold m-2">{service.title}</h3>
        <p className="text-gray-700 m-2">{service.text}</p>
      </div>
    </div>
  );
}

export default HomeServiceCard;
