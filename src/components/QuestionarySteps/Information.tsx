import PhotoPro from "../svg/PhotoPro";

function Information() {
  return (
    <section className="flex p-4 gap-10 ">
      <div>
        <h1 className="text-5xl font-bold text-[#537494]">Information</h1>
        <h2 className="text-2xl font-bold text-[#537494]">Personal Info</h2>
      </div>
      <div className="border border-gray-200 shadow-lg rounded-xl p-10 w-2/3 bg-white">
        <div className="grid grid-cols-2 gap-10">
          <div className="w-full">
            <p className="text-xl font-medium text-slate-500 ">Имя</p>
            <input className="border p-3 w-full rounded-lg capitalize border-slate-700 shadow-md" />
          </div>
          <div className="w-full">
            <p className="text-xl font-medium text-slate-500  ">Фамилия</p>
            <input className="border p-3 w-full rounded-lg capitalize border-slate-700 shadow-md" />
          </div>
          <div className="w-full">
            <p className="text-xl font-medium text-slate-500  ">Пол</p>
            <input className="border p-3 w-full rounded-lg capitalize border-slate-700 shadow-md" />
          </div>
          <div className="w-full">
            <p className="text-xl font-medium text-slate-500  ">
              Дата Рождение
            </p>
            <input className="border p-3 w-full rounded-lg capitalize border-slate-700 shadow-md" />
          </div>
        </div>
        <div className="relative mt-5 h-36 flex gap-10 justify-center items-center">
          <label
            htmlFor="#photo"
            className="h-full w-4/5 border-2 rounded-lg flex border-dashed hover:border-[#537494] hover:text-[#537494] transition-all duration-200 placeholder:hidden justify-center items-center"
          >
            <span className="text-xl block font-normal">
              <PhotoPro />
              Загрузить аватар
            </span>
          </label>
          <input type="file" id="#photo" className="hidden" />
        </div>
      </div>
    </section>
  );
}

export default Information;
