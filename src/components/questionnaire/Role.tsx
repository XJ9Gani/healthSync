import QuestionnaireInput from "./QuestionaireInput";

const gender = [
  { id: 1, item: "Мужской" },
  { id: 2, item: "Женский" },
];

const roles = [
  { id: 1, item: "Пациент" },
  { id: 2, item: "Доктор" },
];
function Role() {
  return (
    <>
      <h1 className="text-2xl font-medium">Информация</h1>
      <div className="pt-10 flex justify-start gap-3">
        <QuestionnaireInput lable="Пол" dropDown={gender} />
        <QuestionnaireInput lable="Роль в системе" dropDown={roles} />
        <QuestionnaireInput lable="Роль в системе" dropDown={roles} />
      </div>
    </>
  );
}

export default Role;
