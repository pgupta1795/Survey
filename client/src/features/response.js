import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { responseData: '', formData: '' };

export const responseSlice = createSlice({
  name: 'response',
  initialState: { value: initialStateValue },
  reducers: {
    data: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { data } = responseSlice.actions;

export default responseSlice.reducer;
