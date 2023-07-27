import { useEffect, useState } from 'react';
// import fetchNews from 'fetch/news';
import NewsList from './NewsList/NewsList';
// import { NContainer } from './News.styled';
import NewsFilter from 'components/News/NewsSearch/NewsSearch';
import AppPagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import newsArr from './allArticles';
const News = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);

  // const [news, setNews] = useState([]);
  // setNews(newsArr);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchNews();
  //       setNews(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
