import { NavLink } from "react-router-dom";
import logo from '../../public/logo.png';
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import HeaderCategoryBlock from "./ux/HeaderCategoryBlock";
import { HiMiniBars3 } from "react-icons/hi2";
import { useState } from "react";

const Header = () => {
  const [isCategoryBlock, setIsCategoryBlock] = useState<boolean>(false);
  const [isSideBar, setIsSideBar] = useState<boolean>(false);

  return (
    <>
      <header className="w-[90%] mx-auto py-7 flex justify-between items-center text-white laptop:mb-10 font-lato">
        <div className="w-[200px] max-w-[60%] laptop:w-[10%] flex items-center">
          <HiMiniBars3 className="text-5xl mr-3 cursor-pointer laptop:hidden" onClick={() => setIsSideBar(!isSideBar)} />
          <NavLink to={"/"} className="w-[100%]">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div
          className={`w-[100%] h-[88%] fixed z-10 bottom-0 bg-[#101010] laptop:hidden pl-[5%] pt-10 text-xl transition-all duration-300 ${
            isSideBar ? "left-0" : "left-[-100%]"
          }`}
          onClick={() => setIsSideBar(false)}
        >
            <NavLink to={"/categories/all"}><p className="hover:text-gray-400 transition-colors duration-300">Категории</p></NavLink>
            <NavLink to={"/"}><p className="my-3 hover:text-gray-400 transition-colors duration-300">О нас</p></NavLink>
            <NavLink to={"/"}><p className="hover:text-gray-400 transition-colors duration-300">Контакты</p></NavLink>
        </div>
          <div className="hidden w-[28%] desktop:w-[25%] desktop:text-lg desktop2:w-[35%] laptop:flex justify-between desktop2:text-3xl">
            <NavLink to={"/categories/all"} className="relative" onMouseEnter={() => setIsCategoryBlock(true)} >
              <p className="relative hover:text-gray-400 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gray-100 hover:after:w-full after:transition-all after:duration-300">
                Категории
              </p>
              {isCategoryBlock && (<HeaderCategoryBlock setIsCategoryBlock={setIsCategoryBlock} />)}
            </NavLink>
            <NavLink to={"/"}>
              <p className="relative hover:text-gray-400 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gray-100 hover:after:w-full after:transition-all after:duration-300">
                О нас
              </p>
            </NavLink>
            <NavLink to={"/"}>
              <p className="relative hover:text-gray-400 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gray-100 hover:after:w-full after:transition-all after:duration-300">
                Контакты
              </p>
            </NavLink>
          </div>
        <div className="flex items-center">
          <div className="relative pr-2 hidden laptop:block">
            <input type="text" placeholder="Поиск" className="bg-[#2D2E32] rounded-lg outline-none py-2 pl-10 desktop2:text-2xl" />
            <CiSearch className=" absolute top-2 left-2 text-2xl desktop2:text-3xl text-[#979797]" />
          </div>
          <NavLink to={"/"} className="bg-[#2D2E32] p-2 rounded-lg hover:bg-gray-600 transition-colors duration-300" >
            <FiShoppingCart className="text-2xl desktop2:text-3xl" />
          </NavLink>
        </div>
      </header>
      <div className="relative text-white w-[90%] mx-auto laptop:hidden mb-5">
        <input type="text" placeholder="Поиск" className="w-full bg-[#2D2E32] rounded-lg outline-none py-2 pl-10 desktop2:text-2xl" />
        <CiSearch className="absolute top-2 left-2 text-2xl desktop2:text-3xl text-[#979797]" />
      </div>
    </>
  );
};

export default Header;
