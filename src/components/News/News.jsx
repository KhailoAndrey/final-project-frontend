import { useEffect, useState } from 'react';
import NewsList from './NewsList/NewsList';
import NewsFilter from 'components/News/NewsSearch/NewsSearch';
import AppPagination from 'components/Pagination/Pagination';
import fetchNews from 'fetch/news';

const News = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);

  const [newsArr, setnewsArr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNews(page, query);
        setnewsArr(data.articles);

        setTotalPageCount(data.totalPages);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, query]);
  return (
    <>
      <NewsFilter setQuery={setQuery} setPage={setPage} />
      <NewsList news={newsArr} />
      <AppPagination
        setPage={setPage}
        page={page}
        totalPageCount={totalPageCount}
      />
    </>
  );
};
export default News;
