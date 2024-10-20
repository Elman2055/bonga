import { useEffect, useState } from "react";
import MainPage from "../components/mainPage/MainPage";
import { TProduct } from "../types/types.data";
import { useGetProductsMutation } from "../store/bonga.api";
import Loader from "../components/ui/Loader";

const MainPageContainer = () => {
  const [product, { isLoading }] = useGetProductsMutation();
  const [products, setProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    const { data } = await product("");
    if (data) setProducts(data.items);
  };

  useEffect(() => {
    getProducts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loader isOpen={isLoading} />
      <MainPage products={products} />
    </>
  );
};

export default MainPageContainer;
