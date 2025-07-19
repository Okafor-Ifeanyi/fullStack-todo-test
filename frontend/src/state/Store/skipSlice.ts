// store/skipSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface SkipState {
  value: number;
}

const initialState: SkipState = {
  value: 10, // default value
};

const skipSlice = createSlice({
  name: 'skip',
  initialState,
  reducers: {
    incrementSkip: (state) => {
      state.value += 10;
    },
    resetSkip: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementSkip, resetSkip } = skipSlice.actions;
export default skipSlice.reducer;