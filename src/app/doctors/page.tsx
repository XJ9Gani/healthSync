// app/doctors/page.tsx
import DoctorCard from "@/components/doctors/DoctorCard";
import { Doctor } from "@/components/types/DoctorType";
import axios from "axios";

// const doctors: Doctor[] = [
//   {
//     id: "1",
//     name: "Айдана Бакытова",
//     city: "Алматы",
//     district: "мкр Самал-1",
//     rating: 2,
//     reviews: 3,
//     experience: 5,
//     age: 28,
//     description:
//       "Опытная педиатр, работает с грудничками и детьми младшего возраста. Отлично владеет казахским и русским языками.",
//     languages: ["Казахский", "Русский"],
//     specialization: "Педиатр",
//     image: "image_url_1",
//   },
//   {
//     id: "2",
//     name: "Марат Ермеков",
//     city: "Астана",
//     district: "р-н Есиль",
//     rating: 4.8,
//     reviews: 12,
//     experience: 10,
//     age: 35,
//     description:
//       "Опытный терапевт, специализируется на общих заболеваниях и профилактике.",
//     languages: ["Казахский", "Русский", "Английский"],
//     specialization: "Терапевт",
//     image: "image_url_2",
//   },
//   {
//     id: "3",
//     name: "Жанна Тулегенова",
//     city: "Шымкент",
//     district: "мкр Нурсат",
//     rating: 2,
//     reviews: 8,
//     experience: 7,
//     age: 32,
//     description:
//       "Семейный врач, работает с детьми и взрослыми. Уделяет внимание профилактике и здоровому образу жизни.",
//     languages: ["Русский", "Казахский"],
//     specialization: "Семейный врач",
//     image: "image_url_3",
//   },
//   {
//     id: "4",
//     name: "Ержан Айтбаев",
//     city: "Караганда",
//     district: "мкр Восток-5",
//     rating: 1,
//     reviews: 15,
//     experience: 12,
//     age: 40,
//     description:
//       "Геронтолог, работает с пожилыми пациентами. Помогает в борьбе с хроническими заболеваниями.",
//     languages: ["Казахский", "Русский"],
//     specialization: "Геронтолог",
//     image: "image_url_4",
//   },
//   {
//     id: "5",
//     name: "Асель Рахимова",
//     city: "Алматы",
//     district: "Бостандыкский район",
//     rating: 3.5,
//     reviews: 6,
//     experience: 6,
//     age: 30,
//     description:
//       "Нутрициолог, разрабатывает индивидуальные планы питания, работает с людьми всех возрастов.",
//     languages: ["Русский"],
//     specialization: "Нутрициолог",
//     image: "image_url_5",
//   },
//   {
//     id: "6",
//     name: "Айгерим Сагынтаева",
//     city: "Атырау",
//     district: "мкр Привокзальный",
//     rating: 5,
//     reviews: 10,
//     experience: 9,
//     age: 33,
//     description: "Педиатр, специализируется на детских аллергиях и иммунитете.",
//     languages: ["Казахский", "Русский"],
//     specialization: "Педиатр",
//     image: "image_url_6",
//   },
//   {
//     id: "7",
//     name: "Тимур Даулетов",
//     city: "Актобе",
//     district: "р-н Новый город",
//     rating: 4.6,
//     reviews: 2,
//     experience: 8,
//     age: 34,
//     description:
//       "Терапевт широкого профиля. Работает с взрослыми пациентами, проводит диагностику.",
//     languages: ["Русский"],
//     specialization: "Терапевт",
//     image: "image_url_7",
//   },
//   {
//     id: "8",
//     name: "Салтанат Мусина",
//     city: "Алматы",
//     district: "мкр Таугуль",
//     rating: 5,
//     reviews: 20,
//     experience: 14,
//     age: 42,
//     description:
//       "Гинеколог, специализируется на женском здоровье, репродуктивной медицине.",
//     languages: ["Казахский", "Русский"],
//     specialization: "Гинеколог",
//     image: "image_url_8",
//   },
//   {
//     id: "9",
//     name: "Руслан Есимов",
//     city: "Тараз",
//     district: "Центральный район",
//     rating: 3.5,
//     reviews: 7,
//     experience: 6,
//     age: 31,
//     description:
//       "Психотерапевт, работает с подростками и взрослыми. Помогает в борьбе с тревожностью и депрессией.",
//     languages: ["Русский"],
//     specialization: "Психотерапевт",
//     image: "image_url_9",
//   },
//   {
//     id: "10",
//     name: "Мадина Калиева",
//     city: "Костанай",
//     district: "мкр Северный",
//     rating: 2,
//     reviews: 11,
//     experience: 9,
//     age: 37,
//     description:
//       "Невролог, работает со взрослыми и пожилыми пациентами. Лечит мигрени, бессонницу и стрессы.",
//     languages: ["Казахский", "Русский"],
//     specialization: "Невролог",
//     image: "image_url_10",
//   },
// ];

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
            <DoctorCard key={doctor.id} doctor={doctor} index={+doctor.id} />
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
