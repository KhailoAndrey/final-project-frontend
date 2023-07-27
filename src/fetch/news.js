const API_URL = 'https://final-project-backend-4o0r.onrender.com/api/news';

async function fetchNews(page, query) {
  try {
    const response = await fetch(
      `${API_URL}?query=${query}&page=${page}`
    );
    if (!response.ok) throw new Error('Sorry. Try again later :(');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchNews;