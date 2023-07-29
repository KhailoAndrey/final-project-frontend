import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import getMessage from 'utils/messages';

axios.defaults.baseURL = 'https://final-project-backend-4o0r.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Create a new user
/*
 * POST @ /api/users/register
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/users/register', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch ({ response }) {
      // getMessage(response);
      return thunkAPI.rejectWithValue(getMessage(response));
    }
  }
);

// Login user
/*
 * POST @ /api/users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch ({ response }) {
      // getMessage(response);
      return thunkAPI.rejectWithValue(getMessage(response));
    }
  }
);

// Log out user
/*
 * POST @ /api/users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(getMessage(response));
  }
});

// Get information about the current user
/*
 * GET @ /api/users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'auth/addToFavorite',
  async (_id, thunkAPI) => {
    try {
      const res = await axios.patch(`/api/notices/favorite/add/${_id}`);
      return res.data;
    } catch ({ response }) {
      // getMessage(response);
      return thunkAPI.rejectWithValue(getMessage(response));
    }
  }
);

export const delFromFavorite = createAsyncThunk(
  'auth/delFromFavorite',
  async (_id, thunkAPI) => {
    try {
      const res = await axios.patch(`/api/notices/favorite/delete/${_id}`);
      return res.data;
    } catch ({ response }) {
      // getMessage(response);
      return thunkAPI.rejectWithValue(getMessage(response));
    }
  }
);

export const addOwnPet = createAsyncThunk(
  'auth/addOwnPet',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.patch(`/api/users/pets`, credentials);
      return res.data;
    } catch ({ response }) {
      // getMessage(response);
      return thunkAPI.rejectWithValue(getMessage(response));
    }
  }
);

export const deleteOwnPet = createAsyncThunk(
  'auth/deleteOwnPet',
  async (_id, thunkAPI) => {
    try {
      console.log('from delete thunk', _id);
      const res = await axios.patch(`/api/users/pets/${_id}`);
      return res.data;
    } catch ({ response }) {
      // getMessage(response);
      return thunkAPI.rejectWithValue(getMessage(response));
    }
  }
);