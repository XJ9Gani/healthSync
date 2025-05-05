import Link from "next/link";
import { Doctor } from "../types/DoctorType";

interface Props {
  doctor: Doctor;
  index: number | undefined;
}

export default function DoctorCard({ doctor, index }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition w-full max-w-md">
      <h2 className="text-xl font-bold mb-1">{doctor.name}</h2>
      <p className="text-sm text-gray-500 mb-1">
        {doctor.specialization} — {doctor.city}, {doctor.district}
      </p>
      <p className="mb-2 text-gray-700">{doctor.description}</p>
      <p className="text-sm">
        Опыт: {doctor.experience} лет | Возраст: {doctor.age}
      </p>
      <p className="text-sm">Языки: {doctor.languages.join(", ")}</p>
      <p className="text-sm">
        ⭐ {doctor.rating} ({doctor.reviews} отзывов)
      </p>
      <Link href={`/doctors/${index}`}>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Подробнее
        </button>
      </Link>
    </div>
  );
}
