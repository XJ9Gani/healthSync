// app/doctors/page.tsx
import DoctorCard from "@/components/doctors/DoctorCard";
import { Doctor } from "@/components/types/DoctorType";
import axios from "axios";

const speciality = [
  { id: 1, name: "Ортопед" },
  { id: 2, name: "Педиатр" },
  { id: 3, name: "Терапевт" },
  { id: 4, name: "Семейный врач" },
  { id: 5, name: "Геронтолог" },
  { id: 6, name: "Невролог" },
  { id: 7, name: "Психотерапевт" },
  { id: 8, name: "Нутрициолог" },
  { id: 9, name: "Гинеколог" },
  { id: 10, name: "Эндокринолог" },
  { id: 11, name: "Кардиолог" },
  { id: 12, name: "Отоларинголог" },
  { id: 13, name: "Ортопед" },
  { id: 14, name: "Дерматолог" },
  { id: 15, name: "Уролог" },
  { id: 16, name: "Логопед" },
  { id: 17, name: "Хирург" },
  { id: 18, name: "Офтальмолог" },
  { id: 19, name: "Психиатр" },
];

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
    <main className="pt-32 px-32">
      <div className="flex justify-between ">
        {" "}
        <h1 className="text-4xl font-medium mb-6 text-[#658d9c]">
          Список врачей
        </h1>
        <h1 className="text-4xl font-medium mb-6 text-[#658d9c]  mr-[6rem]">
          Фильтры
        </h1>
      </div>
      <div className="flex">
        <div className="grid grid-cols-1 gap-6 w-3/4  pt-10">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={doctor.id} />
          ))}
        </div>
        <div className="w-1/4 h-fit">
          <div className=" w-full p-5">
            <p className="text-lg font-light text-[#658d9c]">
              Язык для разговора
            </p>

            <div className="flex flex-col gap-5 mt-4 border-b pb-5">
              <div className="flex items-center gap-3">
                <input type="checkbox" id="kaz" className="size-7" />
                <label
                  htmlFor="kaz"
                  className="text-lg font-medium text-[#658d9c]"
                >
                  Казахский
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="rus" className="size-7" />
                <label
                  htmlFor="rus"
                  className="text-lg font-medium text-[#658d9c]"
                >
                  Русский
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-4 border-b pb-5">
              <p className="text-lg font-light text-[#658d9c]">Специальность</p>
              <select className="p-3 rounded-lg bg-gray-200 text-[#658d9c]">
                <option value="">Выберите специальность</option>
                {speciality.map((spec) => (
                  <option key={spec.id} value={spec.name}>
                    {spec.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
