import logo from "../../public/logo.png";
import { LuFacebook } from "react-icons/lu";
import { CiBasketball } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] rounded-t-xl pt-10 laptop:pt-20 font-lato text-white mt-20">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-[150px] max-w-[40%] laptop:w-[20%]"><img src={logo} alt="logo" /></div>
          <div className="flex">
            <div className="bg-[#2D2E32] p-3 rounded-xl hover:bg-gray-600 transition-colors duration-300">
              <LuFacebook className=" laptop:text-3xl desktop2:text-5xl cursor-pointer" />
            </div>
            <div className="bg-[#2D2E32] p-3 rounded-xl mx-3 hover:bg-gray-600 transition-colors duration-300">
              <CiBasketball className=" laptop:text-3xl desktop2:text-5xl cursor-pointer" />
            </div>
            <div className="bg-[#2D2E32] p-3 rounded-xl hover:bg-gray-600 transition-colors duration-300">
              <FaInstagram className=" laptop:text-3xl desktop2:text-5xl cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center laptop:items-start mt-10">
          <div className="w-[60%] flex justify-between h-[20vh] laptop:h-[30vh] text-sm desktop:text-base desktop:w-[50%] desktop2:text-2xl desktop2:w-[55%]">
            <div className="hidden laptop:flex flex-col justify-between">
                <p className=" text-xl desktop2:text-3xl font-bold mb-1">Меню</p>
                <p className="cursor-pointer hover:text-gray-400 transition-colors duration-300">Все курсы</p>
                <p className="cursor-pointer hover:text-gray-400 transition-colors duration-300">Бесплатно</p>
                <p className="cursor-pointer hover:text-gray-400 transition-colors duration-300">О нас</p>
                <p className="cursor-pointer hover:text-gray-400 transition-colors duration-300">Блог</p>
            </div>
            <div className="hidden laptop:flex flex-col justify-between h-[24vh]">
                <p className="text-xl desktop2:text-3xl font-bold mb-1">Поддержка</p>
                <p className="cursor-pointer hover:text-gray-400 transition-colors duration-300">Создать запрос</p>
                <p className="cursor-pointer hover:text-gray-400 transition-colors duration-300">Чат с поддержкой 24/7</p>
                <p className="cursor-pointer hover:text-gray-400 transition-colors duration-300">Поиск в базе знаний</p>
            </div>
            <div className="flex flex-col justify-between text-xs tablet:text-base desktop2:text-3xl">
                <p className="text-base tablet:text-xl desktop2:text-3xl font-bold mb-1">Компания</p>
                <p>Компания TOO Trixxxelll</p>
                <p>Руководитель Ким Полина</p>
                <p>Счет KZ123456789065324</p>
                <p>Банк “KaspiBank”</p>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <div className=" mb-10 text-right text-xs tablet:text-sm desktop:text-base desktop2:text-2xl">
              <p>+7 (777) 134-76-67</p>
              <p className="my-2">bonga.school@mail.ru</p>
              <p>Казахстан, г. Алматы <br /> ул.Радостовца 456</p>
            </div>
            <div className="flex flex-col justify-between h-[12vh] tablet:h-[15vh] laptop:hidden text-xs tablet:text-sm">
              <p className=" tablet:text-xl font-bold mb-1">Поддержка</p>
              <p className="cursor-pointer hover:text-gray-400 transition-colors duration-300">Создать запрос</p>
              <p className="cursor-pointer hover:text-gray-400 transition-colors duration-300">Чат с поддержкой 24/7</p>
              <p className="cursor-pointer hover:text-gray-400 transition-colors duration-300">Поиск в базе знаний</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-[#979797] mt-14"></div>
      <div className="w-[90%] mx-auto py-5 flex justify-between items-end laptop:items-center text-xs tablet:text-base desktop2:text-xl">
        <div className="flex flex-col-reverse laptop:flex-row">
          <a href="" target="_blank"><p className="hover:text-gray-400 transition-colors duration-300 mr-10">Политика конфиденциальности</p></a>
          <a href="" target="_blank"><p className="hover:text-gray-400 transition-colors duration-300">Оферта</p></a>
        </div>
          <p>© BONGA 2024 </p>
      </div>
    </div>
  );
};

export default Footer;
