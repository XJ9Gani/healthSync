import Image from "next/image";

const assets = [
  {
    id: 1,
    text: "Название фото в две троки максимум",
    imgHref: "/img1.jpg",
    type: "photo",
  },
  {
    id: 2,
    text: "Название фото в две троки максимум",
    imgHref: "/img2.jpg",
    type: "photo",
  },
  {
    id: 3,
    text: "Название фото в две троки максимум",
    imgHref: "/img3.jpg",
    type: "video",
  },
  {
    id: 4,
    text: "Название фото в две троки максимум",
    imgHref: "/img4.jpg",
    type: "video",
  },
  {
    id: 5,
    text: "Название фото в две троки максимум",
    imgHref: "/img1.jpg",
    type: "photo",
  },
  {
    id: 6,
    text: "Название фото в две троки максимум",
    imgHref: "/img2.jpg",
    type: "video",
  },
  {
    id: 7,
    text: "Название фото в две троки максимум",
    imgHref: "/img3.jpg",
    type: "photo",
  },
  {
    id: 8,
    text: "Название фото в две троки максимум",
    imgHref: "/img4.jpg",
    type: "video",
  },
  {
    id: 9,
    text: "Название фото в две троки максимум",
    imgHref: "/img1.jpg",
    type: "photo",
  },
];

function AssetsSection() {
  return (
    <section className="h-screen pt-20">
      <div className="px-32 h-full">
        <h1 className="uppercase text-4xl font-bold text-[#32495E]">
          Фото и видео отчеты
        </h1>
        <div className="my-3 h-8 flex gap-5">
          <span className="text-lg text-[#32495E] text- hover:border-b hover:border-red-500 lowercase">
            Показать все
          </span>
          <span className="text-lg text-[#32495E] hover:border-b hover:border-red-500 lowercase">
            Только видео
          </span>
          <span className="text-lg text-[#32495E] hover:border-b hover:border-red-500 lowercase">
            Только фото
          </span>
        </div>
        <div className="h-full grid grid-cols-3 grid-rows-3 bg-[#32495E]">
          {assets.map((el) => (
            <div className="relative z-10" key={el.id}>
              <div className="z-10 h-full w-full flex items-center justify-center">
                {el.id === 1 ? (
                  <span className="border-2 px-5 py-3 rounded-full bg-[rgba(50,73,94,0.7)] text-white font-medium">
                    Увеличить
                  </span>
                ) : (
                  <span className="font-medium text-lg text-white">
                    {el.text}
                  </span>
                )}
              </div>
              <Image
                src={el.imgHref}
                alt={el.text}
                width={500}
                height={500}
                className="absolute top-0 left-0 -z-10"
              />
              {el.id !== 1 && (
                <div className="absolute top-0 left-0 w-full h-full bg-[#32495E] opacity-50 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AssetsSection;
