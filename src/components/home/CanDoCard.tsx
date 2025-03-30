type CanDo = {
  id: number;
  text: string;
};

function CanDoCard({ item }: { item: CanDo }) {
  return (
    <div className=" py-2 flex flex-col items-center">
      <div className="rounded-full size-36 bg-[#32495E]"></div>
      <h3 className="text-xl font-bold text-[#32495E]">{item.text}</h3>
    </div>
  );
}

export default CanDoCard;
