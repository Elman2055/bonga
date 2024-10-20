import { useNavigate } from "react-router-dom";
import { TCategories } from "../../types/types.data";
import CategoriesBtns from "../ux/categoriesBtns/CategoriesBtns";
import { CiSearch } from "react-icons/ci";
import { Pagination } from "@mui/material";
import { HiOutlineShoppingBag } from "react-icons/hi";

const CategoriesPage = ({
  products,
  totalPages,
  currentPage,
  setCurrentPage,
}: TCategories) => {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] mx-auto">
      <CategoriesBtns />
      <div className=" hidden laptop:block relative text-white mx-auto">
        <input type="text" placeholder="Поиск" className="w-full bg-[#2D2E32] rounded-lg outline-none py-3 pl-10 desktop2:text-2xl" />
        <CiSearch className="absolute top-3 left-2 text-2xl desktop2:text-3xl text-[#979797]" />
      </div>
      <div className="w-[600px] max-w-[90%] laptop:w-full laptop:max-w-full mx-auto grid grid-cols-1 laptop:grid-cols-3 gap-5 mt-10">
        {products.map((el) => (
          <div
            className=" relative group bg-[#EBECF0] p-3 rounded-2xl cursor-pointer"
            onClick={() => navigate(`/product/${el.product_id}`)}
            key={el.product_id}
          >
            <div className=" hidden laptop:block absolute top-0 right-0 w-20 h-20 group-hover:border-b-[10px] group-hover:border-l-[10px] border-bg-[#EBECF0] rounded-bl-[70px] transition-all duration-300 z-10 group-hover:bg-[#101010]"></div>
            <div className="absolute top-2 right-2 z-20 opacity-100 laptop:opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#818181] laptop:bg-blue-600 p-2 rounded-full">
              <HiOutlineShoppingBag className="text-white text-2xl laptop:text-3xl" />
            </div>
            <img
              src={`https://bonga.webshop2.kz/api/product/previewImage/${el.image_preview}`}
              alt="product"
              className="object-cover rounded-xl aspect-[12/9] pb-2"
            /> 
            <p className=" line-clamp-1 text-2xl desktop2:text-3xl font-medium">{el.title}</p>
            <p className="text-right font-medium desktop2:text-2xl pt-5">{el.price} ₸</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-10">
        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={currentPage}
            size={window.innerWidth > 1024 ? "large" : "medium"}
            shape="rounded"
            color="primary"
            onChange={(event, value) => {
              setCurrentPage(value);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            sx={{
              "& .MuiPaginationItem-root:not(.Mui-selected):not(.Mui-disabled), & .MuiPaginationItem-root.Mui-disabled":
                { border: "1px solid white", color: "grey.500" },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
