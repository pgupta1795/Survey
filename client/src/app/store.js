import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
