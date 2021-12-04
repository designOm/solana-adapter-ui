import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  error: null,
  warning: null,
  success: null,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addError: (state, action) => {
      state.error = action.payload
    },
    removeError: (state) => {
      state.error = null
    },
    addWarning: (state, action) => {
      state.warning = action.payload
    },
    removeWarning: (state) => {
      state.warning = null
    },
    addSuccess: (state, action) => {
      state.success = action.payload
    },
    removeSuccess: (state) => {
      state.success = null
    },

  },
});

export const { addError, removeError, addWarning, removeWarning, addSuccess, removeSuccess } = notificationSlice.actions;


export const selectError = (state) => state.notification.error;
export const selectWarning = (state) => state.notification.warning;
export const selectSuccess = (state) => state.notification.success;

export default notificationSlice.reducer;
