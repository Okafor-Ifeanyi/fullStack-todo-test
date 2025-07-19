import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AuthRequest, AuthResponse, RegisterRequest } from '../types/general';
import { baseQueryWithLogout } from './baseQueryLogout';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithLogout,
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:8080/auth', // Adjust the base URL as needed
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation<AuthResponse, AuthRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { 
  useRegisterMutation, 
  useLoginMutation, 
 } = authApi;