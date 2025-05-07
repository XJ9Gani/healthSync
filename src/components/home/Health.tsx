import Image from "next/image";

function Health() {
  return (
    <section className="z-20 relative overflow-hidden h-[60vh] bg-[#32495E] my-24 hidden lg:block">
      <h1 className="lg:px-32 text-white absolute text-[2rem] lg:text-[5rem] font-bold top-1/4">
        “Начните следить за своим здоровьем уже сегодня!”
      </h1>
      <Image
        src="/fruits.jfif"
        alt="fruits"
        width={1000}
        height={500}
        className="w-full opacity-20 object-contain"
      />
    </section>
  );
}

export default Health;
