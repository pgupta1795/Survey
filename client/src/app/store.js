import { configureStore } from '@reduxjs/toolkit';
import formsReducer from '../features/forms';
import themeReducer from '../features/theme';
import userResponseReducer from '../features/userResponse';
import usersReducer from '../features/users';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    forms: formsReducer,
    userResponse: userResponseReducer,
    users: usersReducer,
  },
});

export default store;
