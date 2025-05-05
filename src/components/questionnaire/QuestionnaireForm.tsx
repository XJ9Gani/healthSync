import Role from "./Role";

function QuestionnaireForm() {
  return (
    <form className="h-screen flex justify-center ">
      <div className="shadow-[0_0_10px_1px_rgba(0,0,0,0.5)] h-96 w-2/3 p-5 rounded-xl">
        <Role />
      </div>
    </form>
  );
}

export default QuestionnaireForm;
