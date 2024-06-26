import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    // get the products, only reading
    getAllproducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (newItem) => ({
        url: "/product/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newItem,
      }),
    }),
  }),
});

export const {
  useGetAllproductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
} = productsApi;
