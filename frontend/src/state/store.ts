import { configureStore, type Action, type ThunkAction } from '@reduxjs/toolkit';
import skipReducer from './Store/skipSlice';
import authReducer from './Store/authSlice';
import { authApi } from '../services/auth.service';
import { userApi } from '../services/user.service';
import { taskApi } from '../services/todo.service';

export const store = configureStore({
    reducer: {
        skip: skipReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(userApi.middleware)
            .concat(taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;