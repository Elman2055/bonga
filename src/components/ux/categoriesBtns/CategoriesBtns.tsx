import { useState } from "react";
import { categories } from "./CategoriesBtns.data";

const CategoriesBtns = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <>
      <div className="hidden text-white w-[84%] desktop:w-[65%] mt-5 desktop2:mt-10 laptop:flex flex-wrap gap-3 mb-10">
        {categories.map((el) => (
          <button
            key={el.id}
            className={`border border-white desktop2:text-2xl px-4 py-2 hover:bg-[#0064E9] hover:border-transparent transition-colors duration-300 rounded-3xl  ${
              el.id === active ? "bg-[#0064E9] border-none" : "bg-transparent"
            }`}
            onClick={() => setActive(el.id)}
          >
            {el.name}
          </button>
        ))}
      </div>
      <div className=" laptop:hidden text-white mt-5 ml-2 flex gap-3 overflow-auto no-scroll">
        {categories.slice(0, 5).map((el) => (
          <button
            key={el.id}
            className={`border border-white desktop2:text-2xl px-4 py-2 hover:bg-[#0064E9] hover:border-transparent transition-colors duration-300 rounded-3xl flex-shrink-0  ${
              el.id === active ? "bg-[#0064E9] border-none" : "bg-transparent"
            }`}
            onClick={() => setActive(el.id)}
          >
            {el.name}
          </button>
        ))}
      </div>
      <div className=" laptop:hidden text-white mt-5 ml-2 flex gap-3 overflow-auto no-scroll">
        {categories.slice(5, 10).map((el) => (
          <button
            key={el.id}
            className={`border border-white desktop2:text-2xl px-4 py-2 hover:bg-[#0064E9] hover:border-transparent transition-colors duration-300 rounded-3xl flex-shrink-0  ${
              el.id === active ? "bg-[#0064E9] border-none" : "bg-transparent"
            }`}
            onClick={() => setActive(el.id)}
          >
            {el.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoriesBtns;
