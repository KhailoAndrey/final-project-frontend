import { AddPetBtn } from 'helpers/AddPetButton/addPetBtn';
import { AttentionModal } from 'components/Modals/ModalAttention/modalAttention';
import { useEffect, useState } from 'react';
import fetchNotices from 'fetch/notice';
import NoticesCategoriesList from 'components/Notices/NoticesCategories/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCatagoriesNav from 'components/Notices/NoticesCategories/NoticesCatagoriesNav/NoticesCatagoriesNav';
import NoticesFilter from 'components/Notices/NoticesFilters/noticesFilter';
import { Title } from 'components/Title/title';
import { NoticeNavContainer, NoticePageContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  const [showAlertModal, setAlertShowModal] = useState(false);
  const [noticeArticles, setNoticeArticles] = useState('');
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('sell');
  const [page, setPage] = useState(1);

  // console.log(setPage);

    useEffect(() => {
      console.log('query ch');
    }, [query]);

  useEffect(() => {
    foo(page, category, query);
    async function foo(page, category, query) {
      const result = await fetchNotices(page, category, query);
      // console.log(' fetch result :>> ', result);
      setNoticeArticles(result);
    }
  }, [page, category, query]);

  return (
    <NoticePageContainer>
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
    </NoticePageContainer>
  );
};

export default NoticesPage;
