const API_URL = 'https://final-project-backend-4o0r.onrender.com/api/notices';

async function fetchNotices(page, category, query, petsSex) {
  // console.log("fetch from sell:");
  // console.log('category :>> ', category);
  // console.log('petsSex :>> ', petsSex);
  try {
    const response = await fetch(
      `${API_URL}?category=${category}&query=${query}&sex=${petsSex}&page=${page}`
    );
    if (!response.ok) throw new Error('Sorry. Try again later :(');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchNotices;