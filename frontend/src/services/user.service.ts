// frontend/services/userApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AuthResponse, RegisterRequest, User } from '../types/general';

const baseUrl = import.meta.env.VITE_APP_BASE_URL
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/users`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => `/`,
      providesTags: ['User'],
    }),

    getUserById: builder.query<User, number>({
      query: (id) => `/${id}`,
      providesTags: ['User'],
    }),

    getMyProfile: builder.query<User, void>({
      query: () => `/me`,
      providesTags: ['User'],
    }),

    updateUser: builder.mutation<AuthResponse, { id: number; data: RegisterRequest }>({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),

    deleteUser: builder.mutation<{ success: boolean; message: string }, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetMyProfileQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;