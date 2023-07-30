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
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.newUser = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logIn.pending, state => {
        state.error = null;
        state.newUser = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.pending, state => {
        state.error = null;
        state.newUser = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
        state.newUser = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(addToFavorite.pending, state => {
        state.error = null;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.user.favorite = action.payload;
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(delFromFavorite.pending, state => {
        state.error = null;
      })
      .addCase(delFromFavorite.fulfilled, (state, action) => {
        const index = state.user.favorite.findIndex(
          article => article === action.payload.deletedNoticeId
        );
        state.user.favorite.splice(index, 1);
      })
      .addCase(delFromFavorite.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addOwnPet.pending, state => {
        state.error = null;
      })
      .addCase(addOwnPet.fulfilled, (state, action) => {
        state.user.pets = action.payload;
      })
      .addCase(addOwnPet.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteOwnPet.pending, state => {
        state.error = null;
      })
      .addCase(deleteOwnPet.fulfilled, (state, action) => {
        const index = state.user.pets.findIndex(
          pet => pet._id === action.payload.deletedNoticeId
        );
        state.user.pets.splice(index, 1);
      })
      .addCase(deleteOwnPet.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateUser.pending, state => {
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { updateNewUserStatus } = authSlice.actions;
export const authReducer = authSlice.reducer;
