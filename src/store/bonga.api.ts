import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://bonga.webshop2.kz/api";

export const bongaApi = createApi({
  reducerPath: "bongaApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: (body: string) => ({
        url: "/product/products",
        method: "POST",
        body: { category: body },
      }),
    }),
    getProduct: builder.query({
      query: (id: number) => `/product/get-product/${id}`,
    }),
  }),
});

export const { useGetProductsMutation, useGetProductQuery } = bongaApi;
