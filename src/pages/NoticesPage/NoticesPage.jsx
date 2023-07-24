import { AddPetBtn } from 'helpers/AddPetButton/addPetBtn';
import { AttentionModal } from 'components/Modals/ModalAttention/modalAttention';
import { useEffect, useState } from 'react';
import fetchNotices from 'fetch/notice';
import NoticesCategoriesList from 'components/Notices/NoticesCategories/NoticesCategoriesList/NoticesCategoriesList';

const NoticesPage = () => {
  const [showAlertModal, setAlertShowModal] = useState(false);
  const [noticeArticles, setNoticeArticles] = useState('');
  const [category, setCategory] = useState('sell');
  const [page, setPage] = useState(1);

  useEffect(() => {
    foo(page, category);
    async function foo(page, category) {
      const result = await fetchNotices(page, category);
      // console.log(' fetch result :>> ', result);
      setNoticeArticles(result);
    }
  }, [page, category]);

  return (
    <>
      <div>
        <div></div>
        <AddPetBtn setShowModal={setAlertShowModal} />
      </div>
      {noticeArticles && <NoticesCategoriesList articles={noticeArticles} />}

      {showAlertModal && <AttentionModal setShowModal={setAlertShowModal} />}
    </>
  );
};

export default NoticesPage;
