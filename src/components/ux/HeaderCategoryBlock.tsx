import { Link } from "react-router-dom";

const HeaderCategoryBlock = ({ setIsCategoryBlock }: { setIsCategoryBlock: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div
      onMouseEnter={() => setIsCategoryBlock(true)}
      onMouseLeave={() => setIsCategoryBlock(false)}
      className=" hidden laptop:block absolute top-10 left-[-100%] text-white bg-[#2D2E32] p-7 rounded-xl w-[50vw] desktop:w-[40vw] mt-4 cursor-default z-10"
    >
      <div className="relative flex justify-between">
        <div className="absolute top-[-47px] left-[80px] desktop2:left-[120px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-[#2D2E32]"></div>
        <div>
          <p className="text-xl desktop2:text-3xl mb-3 desktop2:mb-5">3D модели</p>
          <div className="text-[#979797] text-base desktop2:text-2xl flex flex-col justify-between h-[30vh]">
            {["Животные", "Персонажи", "Фигуры", "Растения", "Текстуры", "Архитектура",].map((el, index) => (
              <Link key={index} to={`/categories/${el}`}>
                <p className="cursor-pointer hover:text-white transition-colors duration-300">{el}</p>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xl desktop2:text-3xl mb-3 desktop2:mb-5">Шрифты</p>
          <div className="text-[#979797] text-base desktop2:text-2xl flex flex-col justify-between h-[25vh]">
            {["Антиква", "Гротеск", "Каллиграфия", "Граффити", "3D"].map((el, index) => (
                <Link key={index} to={`/categories/${el}`}>
                  <p className="cursor-pointer hover:text-white transition-colors duration-300">{el}</p>
                </Link>
              )
            )}
          </div>
        </div>
        <div>
          <p className="text-xl desktop2:text-3xl mb-3 desktop2:mb-5">Сайты</p>
          <div className="text-[#979797] text-base desktop2:text-2xl flex flex-col justify-between h-[25vh]">
            {["Лендинг", "Многостраничник", "Интернет магазин", "Граффити", "3D",].map((el, index) => (
              <Link key={index} to={`/categories/${el}`}>
                <p className="cursor-pointer hover:text-white transition-colors duration-300">{el}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategoryBlock;
