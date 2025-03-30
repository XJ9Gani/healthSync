import HomeTitle from "./HomeTitle";
import Image from "next/image";

function HomeHeading() {
  return (
    <section className="h-[70vh] bg-white pl-32 pt-3">
      <div className="h-full flex justify-between pt-10">
        <HomeTitle />
        <Image src="/pane.png" width={400} height={300} alt="img" />
      </div>
    </section>
  );
}

export default HomeHeading;
