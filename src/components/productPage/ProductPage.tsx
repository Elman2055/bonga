import { ChangeEvent, useState } from "react";
import { TProductPage } from "../../types/types.data";
import Slider from "../ux/Slider";
import { iconsData } from "./ProductPage.data";
import { productInfo } from "./ProductPage.data";
import { feedbacks } from "./ProductPage.data";
import Feedbacks from "../ui/Feedbacks";

const ProductPage = ({ product, sliderProducts }: TProductPage) => {
  const [comment, setComment] = useState({ comment: "", name: "", email: "" });

  const getCommentInfo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setComment((prev) => ({ ...prev, [name]: value }))
  };

  const isFormValid = () => {
    return (
      comment.comment.trim() !== "" &&
      comment.name.trim() !== "" &&
      comment.email.trim() !== ""
    );
  };

  return (
    <>
      <div className="w-[600px] max-w-[90%] laptop:w-[90%] mx-auto text-white">
        {product.map((el) => (
          <div key={el.product_id} className="flex flex-col laptop:flex-row justify-between" >
            <div className="flex flex-col gap-5 laptop:w-[55%]">
              <img
                src={`https://bonga.webshop2.kz/api/product/previewImage/${el.image_preview}`}
                alt="product"
                className="object-cover aspect-[11/9] rounded-2xl"
              />
              <p className="text-2xl desktop2:text-4xl font-bold">{el.title}</p>
              <p className="laptop:text-xl mb-5">{el.description}</p>
              <div className="hidden laptop:flex gap-4 text-[#979797] text-lg desktop2:text-2xl">
                {iconsData.map((el) => (
                  <div key={el.id} className="flex gap-2 items-center">
                    <el.icon /> {el.value}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full laptop:w-[40%] bg-[#2D2E32] py-7 px-4 rounded-xl self-start laptop:text-lg desktop2:text-3xl flex flex-col">
              <p className="flex justify-between font-bold pb-10">Цена <span>{el.price} ₸</span></p>
              <button className=" tablet:hidden py-3 rounded-xl bg-[#EBECF0] text-[#101010] mb-10 hover:bg-[#b4b5b6]  transition-all duration-300">
                Добавить в корзину
              </button>
              {productInfo.map((el) => (
                <p key={el.id} className="flex justify-between border-t border-[#818181] py-4">{el.main} <span>{el.descr}</span></p>
              ))}
              <button className=" hidden tablet:block py-3 rounded-xl bg-[#EBECF0] text-[#101010] mt-12 hover:bg-[#b4b5b6]  transition-all duration-300">
                Добавить в корзину
              </button>
              <button className="hidden tablet:block py-3 rounded-xl bg-[#0064E9] mt-5 hover:bg-[#4282d5] transition-all duration-300">
                Купить 3D модель
              </button>
            </div>
          </div>
        ))}
        <p className="text-2xl tablet:text-3xl desktop2:text-4xl font-bold mt-14 mb-5">Похожие 3D модели:</p>
      </div>
      <Slider items={sliderProducts} />
      <div className="w-[600px] max-w-[90%] laptop:w-[90%] mx-auto text-white">
        <p className="text-2xl tablet:text-3xl desktop2:text-4xl font-bold mt-10 mb-5">Комментарии:</p>
        <div className="flex flex-col-reverse laptop:flex-row justify-between">
          <div className="w-full laptop:w-[35%] flex flex-col gap-3 self-start desktop2:text-3xl mt-10 laptop:m-0">
            <textarea
              name="comment"
              className="w-full laptop:h-[30vh] bg-transparent border border-bg-[#2D2E32] laptop:bg-[#2D2E32] rounded-xl outline-none resize-none p-3 laptop:p-5 laptop:border-none"
              placeholder="Оставить комментарий"
              onChange={getCommentInfo}
              rows={1}
            />
            <p className="text-xs desktop2:text-base my-3">*Прежде чем отправить комментарий впишите информацию ниже</p>
            {["name", "email"].map((el) => (
              <div key={el} className="relative">
                <input
                  type={`${el === "name" ? "text" : "email"}`}
                  name={`${el}`}
                  placeholder={`${el === "name" ? "Фамилия Имя" : "Email"}`}
                  className="w-full bg-transparent border border-bg-[#2D2E32] p-3 rounded-xl outline-none"
                  onChange={getCommentInfo}
                />
              </div>
            ))}
            <button className={`py-2 px-10 rounded-xl self-end ${ isFormValid() ? "bg-[#0064E9]" : "bg-[#4871a8] cursor-not-allowed" }`} >
              Отправить
            </button>
          </div>
          <div className="laptop:w-[60%] flex flex-col gap-5">
            {feedbacks.map((el) => (
              <Feedbacks 
                key={el.id}
                image={el.image}
                auhtor={el.author}
                date={el.date}
                text={el.text}
                answer={el.id === 3 ? true : false}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
