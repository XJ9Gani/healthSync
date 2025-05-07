import Link from "next/link";
import Location from "../svg/Location";
import Image from "next/image";
import { Doctor } from "../types/DoctorType";
import StarRating from "./StarRating";

interface Props {
  doctor: Doctor;
  index: number | undefined;
}

export default function DoctorCard({ doctor, index }: Props) {
  return (
    <Link
      href={`/doctors/${index}`}
      className="flex flex-col  lg:flex-row rounded-xl p-4 lg:hover:shadow-[0_0_8px_1px_gray] transition w-11/12 mx-auto shadow-md cursor-pointer"
    >
      <Image
        src={"/doctor.webp"}
        alt="marat"
        width={500}
        height={500}
        className="lg:w-1/2 rounded-xl"
      />

      <div className="w-full pl-4 flex flex-col">
        <h2 className="text-[2rem] font-medium text-[#658d9c]">
          {doctor.name}
        </h2>
        <p className="text-md text-slate-500 mb-1 flex items-center">
          <span>
            <Location />
          </span>{" "}
          {doctor.city}, {doctor.district}
        </p>

        <div className=" py-5 flex flex-col lg:flex-row lg:items-center items-start text-slate-500">
          <div>
            <StarRating rating={doctor.rating} />
          </div>
          <span className=" lg:border-r lg:px-">
            {doctor.experience > 4 && `Опыт: ${doctor.experience} лет `}
            {doctor.experience > 1 &&
              doctor.experience < 4 &&
              `Опыт: ${doctor.experience} года `}{" "}
            {doctor.experience === 1 && `Опыт: ${doctor.experience} год `}
          </span>
          <span className=" lg:border-r lg:px-">{doctor.reviews} отзывов</span>
          <span className=" lg:px-">Возраст: {doctor.age} лет</span>
        </div>

        <p className="text-md font-medium text-slate-500">
          Языки: {doctor.languages.join(", ")}
        </p>

        <h2 className="text-slate-500 font-light pt-5">{doctor.description}</h2>

        <div className="flex gap-4 mt-10 text-slate-500">
          <span className="bg-gray-200 rounded-lg  px-4 py-3">
            {doctor.city}
          </span>
          <span className="bg-gray-200 rounded-lg  px-4 py-3">
            {doctor.district}
          </span>
        </div>
      </div>
    </Link>
  );
}
