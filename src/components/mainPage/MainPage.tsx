import { useState } from "react";
import mainBg from "../../../public/mainBg.png";
import mobileBg from "../../../public/mobileMainBg.png";
import { backgroundBtns } from "./MainPage.data";
import { infoImages } from "./MainPage.data";
import { answers } from "./MainPage.data";
import { FaArrowRight } from "react-icons/fa";
import Slider from "../ux/Slider";
import { TProduct } from "../../types/types.data";
import CategoriesBtns from "../ux/categoriesBtns/CategoriesBtns";

const MainPage = ({ products }: { products: TProduct[] }) => {
  const [activeAnswer, setActiveAnswer] = useState<number | null>(null);

  return (
    <>
      <div className=" laptop:hidden">
        <CategoriesBtns />
      </div>
      <div className="w-[90%] mx-auto">
        <div className=" laptop:bg-[#1A1A1A] rounded-xl relative">
          <img 
            src={mobileBg} 
            alt="background" 
            className=" object-cover laptop:hidden" 
          />
          <div className=" laptop:w-1/2 laptop:p-10 desktop:pb-24 text-white">
            <p className="text-3xl desktop:text-5xl desktop2:text-7xl font-bold">
              Откройте мир 3D <br className="hidden laptop:block" /> моделей для{" "}
              <br className="hidden laptop:block" /> ваших проектов!
            </p>
            <p className="desktop:text-xl desktop2:text-3xl py-8">
              Тысячи готовых 3D моделей для дизайнеров, <br /> разработчиков
              игр, аниматоров и архитекторов.
            </p>
            <div className="text-black hidden laptop:flex gap-3">
              {["Категории", "Категории"].map((el, index) => (
                <button
                  key={index}
                  className="bg-[#fff] rounded-lg py-2 px-7 hover:bg-[#0064E9] hover:text-white transition-all duration-300 desktop2:text-2xl"
                >
                  {el}
                </button>
              ))}
            </div>
          </div>
          <img src={mainBg} alt="background" className="object-cover absolute top-0 w-1/2 desktop2:w-[40%] right-0 hidden laptop:block" />
        </div>
        <div className=" hidden laptop:flex gap-3 text-white mt-7 mb-10">
          {backgroundBtns.map((el, index) => (
            <button
              key={index}
              className="border border-white rounded-lg desktop2:text-xl py-1 px-4 hover:text-white hover:border-transparent hover:bg-[#0064E9] transition-all duration-300"
            >
              {el}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center text-white">
          <p className=" text-2xl tablet:text-3xl desktop2:text-5xl font-bold my-7 laptop:mt-20 laptop:my-0">Популярное</p>
          <button className="laptop:hidden py-2 px-5 border border-[#818181] rounded-lg text-sm">Категории</button>
        </div>
        <div className="hidden laptop:block"> <CategoriesBtns /> </div>
      </div>
      <Slider items={products} />
      <div className="w-[90%] mx-auto">
        <p className="text-white text-xl tablet:text-2xl desktop2:text-5xl laptop:text-center font-bold mt-14 mb-10 desktop2:mb-20"> Наши преимущества: </p>
        <div className="grid grid-cols-2 laptop:grid-cols-4 gap-4">
          {infoImages.map((el, index) => ( <img key={index} src={el} alt="info" className="object-cover" /> ))}
        </div>
        <div className="flex flex-col laptop:flex-row justify-between gap-5 items-start mt-10">
          <p className="text-white text-2xl tablet:text-4xl desktop2:text-5xl font-bold"> Часто задаваемые <br /> вопросы и ответы </p>
          <div className=" w-full laptop:w-[60%] flex flex-col gap-4">
            {answers.map((el) => (
              <div key={el.id} className="text-white">
                <div
                  onClick={() => setActiveAnswer(activeAnswer === el.id ? null : el.id) }
                  className={`relative z-10 font-bold py-5 px-6 flex justify-between items-center rounded-xl cursor-pointer hover:bg-[#0064E9] transition-all duration-300 ${
                    activeAnswer === el.id ? "bg-[#0064E9]" : "bg-[#2D2E32]"
                  }`}
                >
                  <p className="text-base laptop:text-xl desktop2:text-3xl">{el.question}</p>
                  <FaArrowRight className={`text-xl desktop2:text-3xl transition-transform duration-300 ${ activeAnswer === el.id ? "rotate-[45deg]" : "rotate-[-45deg]" }`}
                  />
                </div>
                <div className={`bg-[#2D2E32] p-6 desktop2:p-10 mt-[-10px] relative rounded-b-xl desktop2:text-2xl ${activeAnswer === el.id ? "block" : "hidden"}`} >
                  <p>{el.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
