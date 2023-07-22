const { createSlice } = require('@reduxjs/toolkit');
const { register, logIn, logOut, refreshUser } = require('./authOperations');

// import Notiflix from 'notiflix';

const initialState = {
  user: { name: 'Annaабракадабра', email: 'anna@email.com' },
  token: null,
  isLoggedIn: true, // после тестов вернуть на false
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //   .addCase(register.rejected, (state, action) => {
      //     Notiflix.Notify.failure(
      //       `Invalid registration data: You should enter a more secure password or another email`
      //     );
      //   })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //   .addCase(logIn.rejected, (state, action) => {
      //     Notiflix.Notify.failure(`Please enter valid registration details`);
      //   })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
