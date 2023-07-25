const API_URL = 'https://final-project-backend-4o0r.onrender.com/api/notices';

async function fetchNotices(page, category, query) {
  // console.log("fetch from sell:");
  // console.log('page :>> ', page);
  // console.log('category :>> ', category);
  // console.log('query :>> ', query);
  try {
    const response = await fetch(
      `${API_URL}?category=${category}&query=${query}&page=${page}`
    );
    if (!response.ok) throw new Error('Sorry. Try again later :(');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchNotices;