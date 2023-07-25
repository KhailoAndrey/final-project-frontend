import { AddPetBtn } from 'helpers/AddPetButton/addPetBtn';
import { AttentionModal } from 'components/Modals/ModalAttention/modalAttention';
import { useEffect, useState } from 'react';
import { useAuth } from 'redux/auth/selectors';
import fetchOwnNotices from 'fetch/noticeOwn';
import fetchFavoriteNotices from 'fetch/noticeFavorite';
import fetchNotices from 'fetch/noticeCategory';
import NoticesCategoriesList from 'components/Notices/NoticesCategories/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCatagoriesNav from 'components/Notices/NoticesCategories/NoticesCatagoriesNav/NoticesCatagoriesNav';
import NoticesFilter from 'components/Notices/NoticesFilters/noticesFilter';
import { Title } from 'components/Title/title';
import { NoticeNavContainer } from './notices.styled';

const Notices = () => {
  const [showAlertModal, setAlertShowModal] = useState(false);
  const [noticeArticles, setNoticeArticles] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('sell');
  const [page, setPage] = useState(1);

  console.log(setPage);
  const { token } = useAuth();

  useEffect(() => {
    foo(page, category, query, token);

    async function foo(page, category, query, token) {
      if (category === 'favorite') {
        const result = await fetchFavoriteNotices(page, query, token);
        setNoticeArticles(result.notices);
        //  console.log(' fetch result favor:>> ', result);
      } else if (category === 'my-ads') {
        const result = await fetchOwnNotices(page, query, token);
        setNoticeArticles(result.notices);
        // console.log(' fetch result own:>> ', result);
      } else if (category === 'sell' || 'lost-found' || 'for-free') {
        const result = await fetchNotices(page, category, query);
        setNoticeArticles(result.notices);
        // console.log(' fetch result sell/lost/free:>> ', result);
      }
    }
  }, [page, category, query, token]);

  return (
    <>
      <div>
        <Title text={'Find your favorite pet'} />
        <NoticesFilter setQuery={setQuery} />
        <NoticeNavContainer>
          <NoticesCatagoriesNav setCategory={setCategory} />
          <AddPetBtn setAlertShowModal={setAlertShowModal} />
        </NoticeNavContainer>
      </div>
      {noticeArticles && <NoticesCategoriesList articles={noticeArticles} />}

      {showAlertModal && (
        <AttentionModal setAlertShowModal={setAlertShowModal} />
      )}
    </>
  );
};

export default Notices;
