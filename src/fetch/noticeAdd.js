const API_URL =
  'https://final-project-backend-4o0r.onrender.com/api/notices/owner';

async function fetchAddNotices(formData, token) {
  const options = {
    method: 'POST',
    headers: {
      // це не треба!!! не розкоментовувати!!!
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  };

  try {
    const response = await fetch(`${API_URL}`, options);
    if (!response.ok) throw new Error('Sorry. Try again later :(');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchAddNotices;
