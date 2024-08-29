import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  isAdminUser,
  refresh,
} from '../auth/services/AuthService';
import FormService from '../pages/form/services/FormService';

const initialStateValue = {
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  formData: [],
  types: [],
  selectedType: '',
  allFormIds: [],
};

export const fetchFormTypes = createAsyncThunk(
  'forms/fetchFormTypes',
  async () => {
    const types = await FormService.getFormTypes();
    return types;
  }
);

export const fetchFormById = createAsyncThunk(
  'forms/fetchFormById',
  async ({ formId }) => {
    const formData = await FormService.getFormById(formId);
    return formData;
  }
);

export const fetchAllForms = createAsyncThunk(
  'forms/fetchAllForms',
  async () => {
    await refresh();
    if (isAdminUser()) return [...getCurrentUser().createdForms];
    const allForms = await FormService.getForms();
    return allForms;
  }
);

export const formsSlice = createSlice({
  name: 'forms',
  initialState: initialStateValue,
  reducers: {
    setResponseData: (state, action) => {
      state.responseData = action.payload;
    },
    setFormById: (state, action) => {
      const { formId, type } = action.payload;
      const forms = JSON.parse(JSON.stringify(state.formData));
      const updatedForms = forms.map((f) => {
        if (f._id !== formId) return f;
        return { ...f, type };
      });
      state.formData = updatedForms;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchFormById.pending, (state) => {
      state.status = 'loading';
    });
    builders.addCase(fetchFormById.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      const existingForm = state.formData?.find(
        (form) => form._id === payload._id
      );
      if (!existingForm) state.formData.push(payload);
    });
    builders.addCase(fetchFormById.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
      console.error(action.error.message);
    });
    builders.addCase(fetchFormTypes.pending, (state) => {
      state.status = 'loading';
    });
    builders.addCase(fetchFormTypes.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.types = payload;
      state.selectedType = [...payload].shift();
    });
    builders.addCase(fetchFormTypes.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
      console.error(action.error.message);
    });
    builders.addCase(fetchAllForms.pending, (state) => {
      state.status = 'loading';
    });
    builders.addCase(fetchAllForms.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      if (isAdminUser()) {
        state.allFormIds = payload;
        return;
      }
      const allFormIds = payload?.map((form) => {
        const existingForm = state.formData?.find((f) => f._id === form._id);
        if (!existingForm) state.formData.push(form);
        return form._id;
      });
      state.allFormIds = allFormIds;
    });
    builders.addCase(fetchAllForms.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
      console.error(action.error.message);
    });
  },
});

export const { setFormById, setYear, setSelectedType } = formsSlice.actions;

export const getStatus = (state) => state.forms.status;

export const getError = (state) => state.forms.error;

export const getTypes = (state) => state.forms.types;

export const getSelectedType = (state) => state.forms.selectedType;

export const getFormDataById = (state, formId) =>
  state.forms.formData.find((form) => form._id === formId);

export const getAllFormIds = (state) => state.forms.allFormIds;

export default formsSlice.reducer;
