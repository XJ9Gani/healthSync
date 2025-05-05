// app/doctors/page.tsx
import DoctorCard from "@/components/doctors/DoctorCard";
import { Doctor } from "@/components/types/DoctorType";
import axios from "axios";

async function getDoctors(): Promise<Doctor[]> {
  try {
    const res = await axios.get("http://localhost:5000/doctors");
    return res.data;
  } catch (error) {
    console.error("Ошибка загрузки докторов:", error);
    return [];
  }
}

export default async function DoctorsPage() {
  const doctors = await getDoctors();
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Наши Врачи</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} index={doctor.id} />
        ))}
      </div>
    </main>
  );
}
