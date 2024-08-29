import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../pages/login/services/UserService';

const initialStateValue = {
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  organizations: '',
  currentOrganization: '',
};

export const fetchOrganizations = createAsyncThunk(
  'users/fetchOrganizations',
  async () => {
    const resData = await UserService.getOrganizations();
    return resData;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialStateValue,
  reducers: {
    setCurrentOrganization: (state, action) => {
      state.currentOrganization = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchOrganizations.pending, (state) => {
      state.status = 'loading';
    });
    builders.addCase(fetchOrganizations.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.organizations = payload;
      const [current] = payload;
      state.currentOrganization = current;
    });
    builders.addCase(fetchOrganizations.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
      console.error(action.error.message);
    });
  },
});

export const { setCurrentOrganization } = usersSlice.actions;

export const getStatus = (state) => state.users.status;

export const getError = (state) => state.users.error;

export const getOrganizations = (state) => state.users.organizations;

export const getCurrentOrganization = (state) =>
  state.users.currentOrganization;

export const getUserId = (state) =>
  state.users.currentOrganization
    ? Object.values(state.users.currentOrganization)[0][0]._id
    : '';

export default usersSlice.reducer;
