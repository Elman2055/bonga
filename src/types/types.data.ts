export type TProduct = {
  category: string;
  description: string;
  image_preview: string;
  price: string;
  product_id: number;
  title: string;
};

export type TProductPage = {
  product: TProduct[];
  sliderProducts: TProduct[];
};

export type TFeedback = {
  image: string;
  auhtor: string;
  date: string;
  text: string;
  answer?: boolean;
};

export type TCategories = {
  products: TProduct[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
