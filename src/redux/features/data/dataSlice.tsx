import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Techie Emma Redux',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // Add your reducers here
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
