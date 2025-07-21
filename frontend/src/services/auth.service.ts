import { createApi } from '@reduxjs/toolkit/query/react';
import type { AuthRequest, AuthResponse, RegisterRequest } from '../types/general';
import { baseQueryWithLogout } from './baseQueryLogout';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithLogout,
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