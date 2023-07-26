const { createSlice } = require('@reduxjs/toolkit');
const {
  register,
  logIn,
  logOut,
  refreshUser,
  addToFavorite,
  delFromFavorite,
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
        // console.log("added to favorite");
        state.user.favorite = action.payload;
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(delFromFavorite.pending, state => {
        state.error = null;
      })
      .addCase(delFromFavorite.fulfilled, (state, action) => {
        console.log(
          'action.payload.deletedNoticeId :>> ',
          action.payload.deletedNoticeId
        );
        const index = state.user.favorite.findIndex(
          article => article === action.payload.deletedNoticeId
        );
        console.log("deleting index ->", index);
        state.user.favorite.splice(index, 1);
      })
      .addCase(delFromFavorite.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
