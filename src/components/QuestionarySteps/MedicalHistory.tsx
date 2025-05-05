function MedicalHistory() {
  return (
    <section className="flex p-4 gap-10">
      <div>
        <h1 className="text-5xl font-bold text-[#537494]">Medical History</h1>
        <h2 className="text-2xl font-bold text-[#537494]">Conditions</h2>
      </div>
      <div className="border border-[#788ca0] w-full flex flex-col gap-5 items-center rounded-2xl p-10 bg-white ">
        <div className="relative w-2/3  overflow-hidden ">
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
            placeholder="Conditions"
            className="w-full font-medium h-14 rounded-full outline-none border shadow-lg px-4 text-[1rem] capitalize"
          />
        </div>{" "}
        <div className="relative w-2/3  overflow-hidden ">
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
            placeholder="Conditions"
            className="w-full font-medium h-14 rounded-full outline-none border shadow-lg px-4 text-[1rem] capitalize"
          />
        </div>
        <div className="relative w-2/3  overflow-hidden ">
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
            placeholder="Conditions"
            className="w-full font-medium h-14 rounded-full outline-none border shadow-lg px-4 text-[1rem] capitalize"
          />
        </div>
        {/*
        <div className="relative w-2/3  overflow-hidden rounded-full ">
          <p
            className=" cursor-pointer px-5 p-4  uppercase font-bold border-black text-[#537494]
           border absolute right-0 text-center border-r-transparent  border-y-transparent h-full
           hover:text-white
           hover:bg-[#537494]
           transition-all duration-200
           "
          >
            Add
          </p>
          <input
            placeholder="Alergy"
            className="w-full font-medium h-14 rounded-full outline-none border shadow-lg px-4 text-[1rem] capitalize"
          />
        </div>
        <div className="relative w-2/3  overflow-hidden rounded-full ">
          <p
            className=" cursor-pointer px-5 p-4  uppercase font-bold border-black text-[#537494]
           border absolute right-0 text-center border-r-transparent  border-y-transparent h-full
           hover:text-white
           hover:bg-[#537494]
           transition-all duration-200
           "
          >
            Add
          </p>
          <input
            placeholder="Medications"
            className="w-full font-medium h-14 rounded-full outline-none border shadow-lg px-4 text-[1rem] capitalize"
          />*/}
      </div>
    </section>
  );
}

export default MedicalHistory;
