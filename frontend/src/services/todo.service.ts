import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Task, TaskRequest, TaskUpdateRequest } from '../types/task';
import type { BaseResponse } from '../types/general';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/tasks',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({

    // Get all tasks for the logged-in user
    getTasks: builder.query<BaseResponse<Task[]>, void>({
      query: () => '/',
      providesTags: ['Task'],
    }),

    // Get a single task by ID
    getTaskById: builder.query<BaseResponse<Task>, number>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Task', id }],
    }),

    // Create a new task
    createTask: builder.mutation<BaseResponse<Task>, TaskRequest>({
      query: (newTask) => ({
        url: '/',
        method: 'POST',
        body: newTask,
      }),
      invalidatesTags: ['Task'],
    }),

    // Update an existing task
    updateTask: builder.mutation<BaseResponse<Task>, { id: number; data: TaskUpdateRequest }>({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Task', id }],
    }),

    // Delete a task
    deleteTask: builder.mutation<BaseResponse<Task>, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;