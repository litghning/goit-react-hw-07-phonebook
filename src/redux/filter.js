import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filter = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilter(state, action) {
      return (state = action.payload);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addFilter } = filter.actions;
export const filterReducer = filter.reducer;