const API_URL =
  'https://final-project-backend-4o0r.onrender.com/api/notices';

async function fetchDeleteNotices(id, token) {
  // console.log('fetch from own:');
  // console.log('page :>> ', page);
  // console.log('query :>> ', query);
  // console.log('token :>> ', token);

  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/${id}`,
      options
    );
    if (!response.ok) throw new Error('Sorry. Try again later :(');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchDeleteNotices;
