import InteractiveMedList from "@/components/reminders/InteractiveMedList";

// import { useState } from "react";

// export default function Reminders() {
//   const [seconds, setSeconds] = useState(0);
//   const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

//   const handleStartTimer = () => {
//     if (Notification.permission !== "granted") {
//       Notification.requestPermission();
//     }

//     if (timerId) {
//       clearTimeout(timerId);
//     }

//     const id = setTimeout(() => {
//       new Notification("⏰ Время вышло!", {
//         body: `Прошло ${seconds} секунд.`,
//         icon: "/alarm-icon.png", // опционально, можно убрать или поставить свою иконку
//       });
//     }, seconds * 1000);

//     setTimerId(id);
//   };

//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-4">
//       <section className="text-5xl font-bold text-[#537494]">Reminders</section>
//       <h1 className="text-2xl mb-4">Будильник / Таймер</h1>
//       <input
//         type="number"
//         min="1"
//         value={seconds}
//         onChange={(e) => setSeconds(Number(e.target.value))}
//         className="border p-2 mb-4 w-32 text-center"
//         placeholder="Секунды"
//       />
//       <button
//         onClick={handleStartTimer}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Запустить таймер
//       </button>
//     </main>
//   );
// }

function Reminders() {
  return (
    <section className="w-full lg:w-11/12 lg:h-11/12 pt-32 pl-5 relative ">
      <h1 className=" text-center lg:text-start text-3xl lg:text-5xl font-bold text-[#537494]">
        Упоминания
      </h1>
      <InteractiveMedList />
    </section>
  );
}

export default Reminders;
