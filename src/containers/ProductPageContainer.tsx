import { useEffect, useState } from "react";
import ProductPage from "../components/productPage/ProductPage";
import { useGetProductQuery, useGetProductsMutation } from "../store/bonga.api";
import { useParams } from "react-router-dom";
import { TProduct } from "../types/types.data";
import Loader from "../components/ui/Loader";

const ProductPageContainer = () => {
  const { id } = useParams();
  const { data, isLoading: loading } = useGetProductQuery(Number(id));
  const [products, { isLoading }] = useGetProductsMutation();

  const [product, setProduct] = useState<TProduct[]>([]);
  const [sliderproducts, setSliderProducts] = useState<TProduct[]>([]);

  const getSliderProducts = async () => {
    const { data } = await products("");
    if (data) setSliderProducts(data.items);
  };

  useEffect(() => {
    if (data) setProduct(data.product);
    getSliderProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data, id]);

  return (
    <>
      <Loader isOpen={loading || isLoading} />
      <ProductPage product={product} sliderProducts={sliderproducts} />
    </>
  );
};

export default ProductPageContainer;
