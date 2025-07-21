import {
  combineReducers,
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import skipReducer from "./Store/skipSlice";
import authReducer from "./Store/authSlice";
import { authApi } from "../services/auth.service";
import { userApi } from "../services/user.service";
import { taskApi } from "../services/todo.service";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"], // Only persist auth state
};

export const reducers = combineReducers({
  skip: skipReducer,
  auth: persistReducer(persistConfig, authReducer),
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [taskApi.reducerPath]: taskApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ✅ Ignore redux-persist non-serializable actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(taskApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
