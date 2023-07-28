const API_URL =
  'https://final-project-backend-4o0r.onrender.com/api/notices/favorite';

async function fetchFavoriteNotices(page, query, token ) {
  // console.log('fetch favorite:');
  // console.log('page :>> ', page);
  // console.log('query :>> ', query);
  // console.log('token :>> ', token);

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}?page=${page}&query=${query}`,
      options
    );
    if (!response.ok) throw new Error('Sorry. Try again later :(');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchFavoriteNotices;
