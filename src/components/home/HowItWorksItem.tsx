import { HowItWorkItem } from "../types/MainPageTypes";

function HowItWorksItem({ el }: { el: HowItWorkItem }) {
  return (
    <div className="text-white cursor-pointer">
      <span className="text-md lg:text-2xl hover:text-red-500">{el.text}</span>
      <span className="w-4 h-4 bg-white rounded-full"></span>
    </div>
  );
}

export default HowItWorksItem;
