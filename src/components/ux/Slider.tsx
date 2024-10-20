import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { TProduct } from "../../types/types.data";
import { useNavigate } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";

const Slider = ({ items }: { items: TProduct[] }) => {
  const navigate = useNavigate();

  return (
    <div className="relative ml-[5%] laptop:m-0">
      <Swiper
        spaceBetween={20}
        navigation={{ prevEl: ".prev", nextEl: ".next" }}
        modules={[Navigation]}
        slidesPerView={1.5}
        breakpoints={{ 640: { slidesPerView: 2.5 }, 1024: { slidesPerView: 4 } }}
        className="laptop:w-[90%]"
      >
        {items.map((el) => (
          <SwiperSlide key={el.product_id}>
            <div
              className="bg-[#EBECF0] p-3 rounded-2xl cursor-pointer"
              onClick={() => navigate(`/product/${el.product_id}`)}
            >
              <img
                src={`https://bonga.webshop2.kz/api/product/previewImage/${el.image_preview}`}
                alt="product"
                className="object-cover rounded-xl aspect-[10/9] pb-2"
              />
              <p className=" line-clamp-1 text-2xl desktop2:text-3xl font-medium">{el.title}</p>
              <p className="text-right font-medium desktop2:text-2xl pt-5">{el.price} ₸</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden laptop:block prev absolute top-[40%] left-[0.5%] desktop:left-[1%]  bg-[#2D2E32] p-2 rounded-full hover:bg-[#0064E9] transition-colors duration-300 cursor-pointer">
        <IoIosArrowBack className="text-2xl desktop:text-3xl desktop2:text-5xl text-white" />
      </div>

      <div className="hidden laptop:block next absolute top-[40%] right-[0.5%] desktop:right-[1%]  bg-[#2D2E32] p-2 rounded-full hover:bg-[#0064E9] transition-colors duration-300 cursor-pointer">
        <IoIosArrowForward className="text-2xl desktop:text-3xl desktop2:text-5xl text-white" />
      </div>
    </div>
  );
};

export default Slider;
