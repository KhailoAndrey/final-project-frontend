const API_URL = 'https://final-project-backend-4o0r.onrender.com';

async function fetchNoticesById(id) {
  
  try {
    const response = await fetch(
      `${API_URL}/api/notices/${id}`
    );
    if (!response.ok) throw new Error('Sorry. Try again later :(');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}


export default fetchNoticesById