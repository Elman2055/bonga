import { TFeedback } from "../../types/types.data";

const Feedbacks = ({ image, auhtor, date, text, answer }: TFeedback) => {
  return (
    <div className={`bg-[#262626] p-5 ${ answer ? "border-t border-bg-white rounded-b-xl -mt-7" : "rounded-xl" }`}>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img src={image} alt="user-photo" className="object-cover w-[17%] aspect-[9/9]" />
          <div>
            <p className=" tablet:text-xl desktop2:text-2xl">@{auhtor}</p>
            <p className="text-[#818181] text-sm tablet:text-base desktop2:text-xl">{date}</p>
          </div>
        </div>
        <p className="text-[#818181] cursor-pointer self-start hover:text-white text-sm tablet:text-base desktop2:text-xl">
          Жалоба
        </p>
      </div>
      <p className="mt-5 mb-2 text-sm tablet:text-base desktop2:text-xl">{text}</p>
      <div className="flex justify-between text-[#818181] text-sm tablet:text-base desktop2:text-xl">
        <p>Ответов: 15</p>
        <p className="cursor-pointer hover:text-white">Ответить</p>
      </div>
    </div>
  );
};

export default Feedbacks;
