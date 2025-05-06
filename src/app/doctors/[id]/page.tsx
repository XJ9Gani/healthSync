import { Doctor } from "@/components/types/DoctorType";
import axios from "axios";
import { notFound } from "next/navigation";
import RegisterButton from "../../../components/doctors/RegisterButton";
import Image from "next/image";
import LocationPin from "@/components/svg/Location";

async function getDoctors(): Promise<any> {
  try {
    const res = await axios.get("http://localhost:5000/doctors");
    return res.data;
  } catch (e) {
    console.error("Ошибка при получении списка врачей:", e);
    return [];
  }
}

export default async function DoctorPage({ params }: any) {
  const doctors = await getDoctors();
  const doctor: Doctor = doctors.find(
    (doc: any) => doc.id.toString() === params.id
  );

  if (!doctor) return notFound();

  return (
    <main className="p-32 flex">
      <div className="">
        <div className="border-4 border-white shadow-[0_0_20px_1px_gray]">
          <Image
            alt=""
            src="/doctor.webp"
            className="object-fill  "
            width={350}
            height={350}
          />
        </div>
        <p className="text-[2.5rem] text-start font-medium text-slate-500">
          {doctor.name}
        </p>
        <p className="text-lg text-slate-500 mb-1 flex items-center">
          <span>
            <LocationPin />
          </span>{" "}
          {doctor.city}, {doctor.district}
        </p>

        <div className="flex items-end gap-1">
          <span className="text-md font-medium text-slate-500">Опыт :</span>
          <p className="border-t pt-[5px] border-dashed border-slate-500 w-2/3"></p>
          <span className="text-md font-medium mt-5">
            {doctor.experience > 4 && `${doctor.experience} лет `}
            {doctor.experience > 1 &&
              doctor.experience < 4 &&
              ` ${doctor.experience} года `}{" "}
            {doctor.experience === 1 && ` ${doctor.experience} год `}
          </span>
        </div>

        <div className="flex items-end gap-1">
          <span className="text-md font-medium text-slate-500">Возраст :</span>
          <p className="border-t pt-[5px] border-dashed border-slate-500 w-2/3"></p>
          <span className="text-md font-medium mt-5">
            {doctor.experience > 4 && `${doctor.experience} лет `}
            {doctor.experience > 1 &&
              doctor.experience < 4 &&
              ` ${doctor.experience} года `}{" "}
            {doctor.experience === 1 && ` ${doctor.experience} год `}
          </span>
        </div>
        <RegisterButton doctorId={+doctor.id} />
      </div>
      <div className="ml-5  w-3/4 flex flex-col ">
        <div className="bg-white w-full  p-10 shadow-[0_0_10px_1px_gray]">
          <h1 className="border-b text-3xl text-slate-500 py-5">Обо мне</h1>
          <h2 className="text-md text-slate-500 py-5">{doctor.description}</h2>
        </div>
      </div>
      {/* <h1 className="text-3xl font-bold mb-4">{doctor.name}</h1>

      <p className="mb-2">Опыт: {doctor.experience} лет</p>
      <p className="mb-2">Описание: {doctor.description}</p>

       */}
    </main>
  );
}
