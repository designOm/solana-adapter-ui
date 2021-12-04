import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserWithCredential, fetchUserWithWallet } from './userAPI';


const initialState = {
  status: 'idle',
  wallet: null,
  data: null,
  token: null
};

export const getUserAsync = createAsyncThunk(
  'user/get',
  async ({ email, password, walletAddress, publicKey }) => {
    let response;
    if (email && password) response = await fetchUserWithCredential(email, password);
    if (walletAddress && publicKey) response = await fetchUserWithWallet(walletAddress, publicKey)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    addWallet: (state, action) => {
      state.wallet = action.payload
    },
    disconnectWallet: (state) => {
      state.wallet = null
    },

    removeUserToken: (state) => {
      state.token = null
    },

    removeUserData: (state) => {
      state.data = null
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
        state.token = action.payload.jwt_token
      });
  },
});

export const { addWallet, disconnectWallet, removeUserToken, removeUserData } = userSlice.actions;


export const selectWallet = state => state.user.wallet;
export const selectUserData = state => state.user.data;
export const selectUserToken = state => state.user.token;
export const selectUserStatus = state => state.user.status;



export default userSlice.reducer;
