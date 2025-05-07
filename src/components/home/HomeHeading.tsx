import HomeTitle from "./HomeTitle";
import Image from "next/image";

function HomeHeading() {
  return (
    <section className="lg:h-[70vh]   lg:pl-32 pt-3">
      <div className="lg:h-full flex justify-between pt-16">
        <HomeTitle />
        <Image
          src="/pane.png"
          width={400}
          height={300}
          alt="img"
          className="absolute opacity-20 lg:static lg:opacity-100 h-96 lg:h-full"
        />
      </div>
    </section>
  );
}

export default HomeHeading;
