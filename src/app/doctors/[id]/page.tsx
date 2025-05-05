import { Doctor } from "@/components/types/DoctorType";
import axios from "axios";
import { notFound } from "next/navigation";
import RegisterButton from "../../../components/doctors/RegisterButton";
import Image from "next/image";

async function getDoctors(): Promise<any> {
  try {
    const res = await axios.get("http://localhost:5000/doctors");
    return res.data;
  } catch (e) {
    console.error("Ошибка при получении списка врачей:", e);
    return [];
  }
}

type DoctorPageProps = {
  params: {
    id: string;
  };
};

export default async function DoctorPage({ params }: DoctorPageProps) {
  const doctors = await getDoctors();
  const doctor = doctors.find((doc: any) => doc.id.toString() === params.id);

  if (!doctor) return notFound();

  return (
    <main className="p-32">
      <Image
        alt="Marat"
        src="/Marat.jpg"
        className="object-fill rounded-2xl shadow-[0_0_20px_1px_gray]"
        width={600}
        height={600}
      />
      <h1 className="text-3xl font-bold mb-4">{doctor.name}</h1>

      <p className="mb-2">Опыт: {doctor.experience} лет</p>
      <p className="mb-2">Описание: {doctor.description}</p>

      <RegisterButton doctorId={doctor.id} />
    </main>
  );
}
