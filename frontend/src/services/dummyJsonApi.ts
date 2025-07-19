// services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProductResponse } from '../types';

export const dummyProducts = createApi({
  reducerPath: 'dummyProduct',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, number>({
      query: (skip) => `products?limit=10&skip=${skip}&select=title,description,price,discountPercentage,images`,
    })
  }),
});

export const { useGetProductsQuery } = dummyProducts;