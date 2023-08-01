const API_URL = 'https://final-project-backend-4o0r.onrender.com/api/notices';

async function fetchNotices(page, category, query, petsSex, petsAge) {
  try {
    const response = await fetch(
      `${API_URL}?category=${category}&query=${query}&sex=${petsSex}&age=${petsAge}&page=${page}`
    );
    if (!response.ok) throw new Error('Sorry. Try again later :(');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchNotices;