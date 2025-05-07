import CanDoCard from "./CanDoCard";

const abilities = [
  { id: 1, text: "🔔 Умные напоминания" },
  { id: 2, text: "📈 Графики здоровья" },
  { id: 3, text: "💬 Чат с врачом" },
  { id: 4, text: "📑 Дневник состояний" },
];

function WhatCanWeDo() {
  return (
    <section className="h-[70vh] lg:h-[50vh] lg:px-32 py-16">
      <h1 className="text-[#32495E] uppercase font-bold text-4xl text-center lg:text-start">
        Что умеет наша платформа?
      </h1>
      <div className="my-2 py-5 grid grid-cols-2 lg:grid-cols-5">
        {abilities.map((el) => (
          <CanDoCard item={el} key={el.id} />
        ))}
      </div>
    </section>
  );
}

export default WhatCanWeDo;
