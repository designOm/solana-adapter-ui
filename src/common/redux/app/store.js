import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import notificationReducer from '../features/notification/notificationSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
  },
});
