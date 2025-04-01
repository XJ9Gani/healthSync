function Role() {
  return (
    <div className="h-[50vh] flex justify-center items-center gap-10">
      <div className="flex items-center gap-3  h-10">
        <label htmlFor="#doctor" className="block text-4xl">
          Доктор
        </label>
        <input
          type="checkbox"
          id="doctor"
          className="block rounded-full size-6"
        />
      </div>
      <div className="flex items-center pag-3">
        <label htmlFor="#doctor" className="block text-4xl">
          Пациент
        </label>
        <input
          type="checkbox"
          id="patient"
          className="block rounded-full size-6"
        />
      </div>
    </div>
  );
}

export default Role;
