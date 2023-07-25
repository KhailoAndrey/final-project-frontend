import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: 'https://barkend.onrender.com/api',
});

export const getNews = async params => {
  try {
    const response = await instance.get('/news', { params });

    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};
