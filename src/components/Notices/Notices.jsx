import { useEffect, useState } from 'react';
import { useAuth } from 'redux/auth/selectors';
import { useTranslation } from 'react-i18next';
import fetchOwnNotices from 'fetch/noticeOwn';
import AddPetBtn from 'helpers/AddPetButton/AddPetBtn';
import fetchFavoriteNotices from 'fetch/noticeFavorite';
import fetchNotices from 'fetch/noticeCategory';
import { AttentionModal } from 'components/Modals/ModalAttention/ModalAttention';
import NoticesCategoriesList from 'components/Notices/NoticesCategories/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCatagoriesNav from 'components/Notices/NoticesCategories/NoticesCatagoriesNav/NoticesCatagoriesNav';
import NoticesFilter from 'components/Notices/NoticesSearch/NoticesSearch';
import { Title } from 'components/Title/title';
import AppPagination from 'components/Pagination/Pagination';
import { NoticeNavContainer } from './Notices.styled';

const Notices = () => {
  const [showAlertModal, setAlertShowModal] = useState(false);
  const [noticeArticles, setNoticeArticles] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('sell');
  const [page, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [rerender, setRerender] = useState(false);
  const { t } = useTranslation();

  const { token } = useAuth();

  useEffect(() => {
    setRerender(true);
    console.log('first render n');
  }, []);

  // useEffect(() => {
  //   console.log('rerender in notices:>> ', rerender);
  // }, [rerender]);

  useEffect(() => {
    foo(page, category, query, token);

    async function foo(page, category, query, token) {
      if (category === 'favorite' && rerender) {
        console.log('rerender in fetch favor:>> ', rerender);
        const result = await fetchFavoriteNotices(page, query, token);
        setNoticeArticles(result.notices);
        setRerender(false);
        //  console.log(' fetch result favor:>> ', result);
        setTotalPageCount(result.totalPages);
      } else if (category === 'my-ads' && rerender) {
        console.log('rerender in fetch my-ads:>> ', rerender);
        // console.log(' category my-ads:>> ', category);
        const result = await fetchOwnNotices(page, query, token);
        setNoticeArticles(result.notices);
        setRerender(false);
        setTotalPageCount(result.totalPages);
        // console.log(' fetch result own:>> ', result);
      } else if (
        (category === 'sell' || 'lost-found' || 'for-free') &&
        rerender
      ) {
        console.log('rerender in fetch s/l/f:>> ', rerender);
        const result = await fetchNotices(page, category, query);
        setNoticeArticles(result.notices);
        setRerender(false);
        // console.log(' fetch result sell/lost/free:>> ', result)
        setTotalPageCount(result.totalPages);
        // console.log(result);
      }
    }
  }, [page, category, query, token, rerender, noticeArticles]);

  return (
    <>
      <div>
        <Title text={t('notice_page_title')} />
        <NoticesFilter setQuery={setQuery} setPage={setPage} />
        <NoticeNavContainer>
          <NoticesCatagoriesNav
            setCategory={setCategory}
            setPage={setPage}
            setRerender={setRerender}
          />
          <AddPetBtn setAlertShowModal={setAlertShowModal} />
        </NoticeNavContainer>
      </div>
      {noticeArticles && (
        <NoticesCategoriesList
          articles={noticeArticles}
          setAlertShowModal={setAlertShowModal}
          setRerender={setRerender}
        />
      )}

      {showAlertModal && (
        <AttentionModal setAlertShowModal={setAlertShowModal} />
      )}
      <AppPagination
        setPage={setPage}
        page={page}
        totalPageCount={totalPageCount}
      />
    </>
  );
};

export default Notices;
