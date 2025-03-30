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
        <div className="border h-full"> </div>
      </div>
    </section>
  );
}

export default AssetsSection;
