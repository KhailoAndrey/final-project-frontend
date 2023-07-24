const API_URL = 'https://final-project-backend-4o0r.onrender.com/api/notices';

async function fetchNotices(page, category) {
  try {
    const response = await fetch(
      `${API_URL}?limit=12&page=${page}&`
    );
    if (!response.ok) throw new Error('Sorry. Try again later :(');
      const data = await response.json();
    return data;
  } catch (error) {
    // toast.error(error.message);
      console.log(error.message);
  }
}

export default fetchNotices;