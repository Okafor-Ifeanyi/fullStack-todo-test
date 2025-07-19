// store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const userFromStorage = localStorage.getItem('user');

const initialState = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
  token: null as string | null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const loadAuthFromLocalStorage = () => (dispatch: any) => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
  
    if (token && user) {
      dispatch(login(JSON.parse(user)));
    }
};

export default authSlice.reducer;