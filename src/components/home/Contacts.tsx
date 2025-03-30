function Contacts() {
  return (
    <section className="h-screen">
      <h1 className="uppercase text-4xl text-[#32495E] font-semibold px-32 my-10">
        Контакты
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d93013.44315132327!2d76.88355839999998!3d43.237376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1743248139804!5m2!1sru!2skz"
        className="px-32 w-full h-[70vh] "
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="flex px-32 h-1/4 gap-10 pt-10">
        <div className="w-56">
          <p className="text-[#32495E] text-xl font-bold">Адреса компании</p>
          <p className="text-[#32495E] text-md font-medium">
            Ул. Печугина 240/1, г. Караганда, 100000, Казахстан
          </p>
        </div>
        <div className="w-56">
          <p className="text-[#32495E] text-xl font-bold">Номера телефонов</p>
          <p className="text-[#32495E] text-md font-medium">+7 700 000 00 00</p>
        </div>
        <div className="w-56">
          <p className="text-[#32495E] text-xl font-bold">
            Дополнительные способы связи
          </p>
          <p className="text-[#32495E] text-md font-medium">
            support@test.kz support@test.kz
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
