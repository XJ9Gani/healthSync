function LifeStyleInfo() {
  return (
    <section className="flex ">
      <h1 className="text-5xl font-bold text-[#537494]">LifeStyle Info</h1>
      <div className="border border-gray-200 w-full rounded-2xl bg-white h-full p-10">
        <div className="flex  gap-4">
          <div className="w-full">
            <p className="text-xl font-medium text-slate-500 ">
              Activity Level
            </p>
            <input className="border border-gray-500 p-3 outline-none h-12 w-full rounded-lg" />
          </div>
          <div className="w-full">
            <p className="text-xl font-medium text-slate-500 ">Smoking</p>
            <input className="border border-gray-500 p-3 outline-none h-12 w-full rounded-lg" />
          </div>
        </div>
        <div className="w-full">
          <p className="text-xl font-medium text-slate-500 ">Smoking</p>
          <input className="border border-gray-500 p-3 outline-none h-12 w-1/3 rounded-lg" />
        </div>

        <div className="relative w-full  overflow-hidden mt-4">
          <p
            className=" rounded-r-full  cursor-pointer px-5 p-4  uppercase font-bold border-black text-[#537494]
           border absolute right-0 text-center border-r-transparent  border-y-transparent h-full
           hover:text-white
           hover:bg-[#537494]
           transition-all duration-200
           "
          >
            Add
          </p>
          <input
            placeholder="Habits"
            className="w-full font-medium h-14 rounded-full outline-none border shadow-lg px-4 text-[1rem] capitalize"
          />
        </div>
      </div>
    </section>
  );
}

export default LifeStyleInfo;
