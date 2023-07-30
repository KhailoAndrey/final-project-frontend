const { createSlice } = require('@reduxjs/toolkit');
const {
  register,
  logIn,
  logOut,
  refreshUser,
  addToFavorite,
  delFromFavorite,
  addOwnPet,
  deleteOwnPet,
  updateUser,
} = require('./authOperations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  newUser: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateNewUserStatus(state, action) {
      state.newUser = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.error = null;
        state.newUser = false;
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.newUser = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.error = null;
        state.newUser = false;
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.error = null;
        state.newUser = false;
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
        state.newUser = false;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(addToFavorite.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.user.favorite = action.payload;
        state.isLoading = false;
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(delFromFavorite.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(delFromFavorite.fulfilled, (state, action) => {
        const index = state.user.favorite.findIndex(
          article => article === action.payload.deletedNoticeId
        );
        state.user.favorite.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(delFromFavorite.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addOwnPet.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addOwnPet.fulfilled, (state, action) => {
        state.user.pets = action.payload;
        state.isLoading = false;
      })
      .addCase(addOwnPet.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteOwnPet.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(deleteOwnPet.fulfilled, (state, action) => {
        const index = state.user.pets.findIndex(
          pet => pet._id === action.payload.deletedNoticeId
        );
        state.user.pets.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(deleteOwnPet.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, state => {
        state.error = null;
        // state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        return { ...state, user: action.payload };
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        // state.isLoading = false;
      });
  },
});

export const { updateNewUserStatus } = authSlice.actions;
export const authReducer = authSlice.reducer;
