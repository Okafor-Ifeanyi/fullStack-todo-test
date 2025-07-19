// services/baseQueryWithLogout.ts
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { logout } from '../state/Store/authSlice';
import type { RootState } from '../state/store';

const baseUrl = import.meta.env.VITE_APP_BASE_URL
export const baseQueryWithLogout: BaseQueryFn<
  any,
  unknown,
  unknown
> = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `${baseUrl}/auth`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.token || localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);
  console.log('Base query result:', result);

  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
    localStorage.removeItem('token');
  }

  return result;
};