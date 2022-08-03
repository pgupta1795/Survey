import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme';
import responseReducer from '../features/response';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    response: responseReducer,
  },
});

export default store;
