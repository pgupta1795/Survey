import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ResponseService from '../pages/form/services/ResponseService';

const initialStateValue = {
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  responseData: [],
  responsesByUser: [],
  year: new Date().getFullYear(),
};

export const fetchResponseByFormAndUserId = createAsyncThunk(
  'userResponse/fetchResponseByFormAndUserId',
  async ({ formId, organization }) => {
    const resData = await ResponseService.getResponseByCompany(
      formId,
      organization
    );
    return resData;
  }
);

export const fetchResponseByUserId = createAsyncThunk(
  'userResponse/fetchResponseByUserId',
  async () => {
    const resData = await ResponseService.getResponsesByUser();
    return resData;
  }
);

export const userResponseSlice = createSlice({
  name: 'userResponse',
  initialState: initialStateValue,
  reducers: {
    setResponseData: (state, action) => {
      state.responseData = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchResponseByFormAndUserId.pending, (state) => {
      state.status = 'loading';
    });
    builders.addCase(
      fetchResponseByFormAndUserId.fulfilled,
      (state, { payload }) => {
        state.status = 'succeeded';
        state.responseData = payload;
      }
    );
    builders.addCase(fetchResponseByFormAndUserId.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
      console.error(action.error.message);
    });
    builders.addCase(fetchResponseByUserId.pending, (state) => {
      state.status = 'loading';
    });
    builders.addCase(fetchResponseByUserId.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.responsesByUser = payload;
    });
    builders.addCase(fetchResponseByUserId.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
      console.error(action.error.message);
    });
  },
});

export const { setResponseData, setYear } = userResponseSlice.actions;

export const getStatus = (state) => state.userResponse.status;

export const getError = (state) => state.userResponse.error;

export const getResponseData = (state) => state.userResponse.responseData;

export const getResponsesByUser = (state) => state.userResponse.responsesByUser;

export const getYear = (state) => state.userResponse.year;

export default userResponseSlice.reducer;
