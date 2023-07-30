const API_URL = 'https://final-project-backend-4o0r.onrender.com/api/notices';
// const API_URL = 'http://localhost:3001/api/notices';


async function fetchTestFilter() {
  const sex = '';
  const page = '1 ';
  const category = 'sell';
  const query = 'Lviv';
  const age = ['>2y', '3-12m'];
  try {
    const response = await fetch(
      `${API_URL}?&category=${category}&query=${query}&sex=${sex}&age=${age}&page=${page}`
    );
    if (!response.ok) throw new Error('Sorry. Try again later :(');
    const data = await response.json();
    console.log('data from test fetch:>> ', data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchTestFilter;
