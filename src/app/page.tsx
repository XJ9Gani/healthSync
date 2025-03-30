import AssetsSection from "@/components/home/AssetsSection";
import Contacts from "@/components/home/Contacts";
import Health from "@/components/home/Health";
import HomeHeading from "@/components/home/HomeHeading";
import HomeServices from "@/components/home/HomeServices";
import HowItWorks from "@/components/home/HowItWorks";
import WhatCanWeDo from "@/components/home/WhatCanWeDo";
import { Service } from "@/components/types/MainPageTypes";

const services: Service[] = [
  {
    id: 1,
    title: "📊 Не отслеживаете состояние?",
    text: "Дневник здоровья и анализ показателей.",
  },
  {
    id: 2,
    title: "⏰ Забываете принимать лекарства?",
    text: "Напоминания о приеме.",
  },
  {
    id: 3,
    title: "👩‍⚕️ Нет связи с врачом?",
    text: "Онлайн-консультации.",
  },
  {
    id: 4,
    title: "🍎 Трудно следить за питанием?",
    text: "Рекомендации специалистов.",
  },
];

export default function Home() {
  return (
    <main className="">
      <HomeHeading />
      <HomeServices services={services} />
      <WhatCanWeDo />
      <HowItWorks />
      <AssetsSection />
      <Health />
      <Contacts />
    </main>
  );
}
