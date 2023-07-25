import axios from 'axios';

export const createPet = async body => {
  return await axios.post(`/api/users/pets`, body, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
