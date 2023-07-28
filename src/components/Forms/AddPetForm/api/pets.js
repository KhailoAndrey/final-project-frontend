import axios from 'axios';

const API_URL = `https://final-project-backend-4o0r.onrender.com/api/users/pets`;

export const createPet = async (body, token) => {
  const response = await axios.patch(`${API_URL}`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      // Authorization: `Bearer ${token}`,
    },
    // headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response;
};

// export const createNotice = async (body, token) => {
//   const response = await axios.patch(`${API_URL}`, body, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       // Authorization: `Bearer ${token}`,
//     },
//     // headers: { 'Content-Type': 'multipart/form-data' },
//   });
//   return response;
// };

// const API_URL =
//   'https://final-project-backend-4o0r.onrender.com/api/users/pets';

// export async function createPet(body, token) {
//   const options = {
//     method: 'PATCH',
//     body: JSON.stringify(body),
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       // Authorization: `Bearer ${token}`,
//     },
//   };
//   try {
//     const response = await fetch(`${API_URL}`, options);
//     if (!response.ok) throw new Error('Sorry. Try again later :(');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export default createPet;
