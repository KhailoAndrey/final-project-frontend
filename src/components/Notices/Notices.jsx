import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'redux/auth/selectors';
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
import {
  NoticeNavContainer,
  NoNotice,
  LoaderDiv,
  BtnContainer,
} from './Notices.styled';
import pets from '../../images/NoNotice/pets.gif';
import LoaderPaws from 'components/Loader/LoaderPaws';
import NoticesDropFilter from './NoticesFilter/NoticesDropFilter';
// import overview from '../../images/NoNotice/overview.gif'

const Notices = () => {
  const [showAlertModal, setAlertShowModal] = useState(false);
  const [noticeArticles, setNoticeArticles] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('sell');
  const [page, setPage] = useState(1);
  const [petsSex, setPetsSex] = useState('');
  const [petsAge, setPetsAge] = useState(['']);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [rerender, setRerender] = useState(false);
  const [notiseLoading, setNoticeLoading] = useState(false);

  const { t } = useTranslation();
  const params = useParams();
  const { token } = useAuth();

  useEffect(() => {
    setRerender(true);
  }, []);

  useEffect(() => {
    if (params.categoryName) {
      setCategory(params.categoryName);
    } else {
      setCategory('sell');
    }
  }, [params.categoryName]);

  useEffect(() => {
    foo(page, category, query, token, petsSex, petsAge);

    const clearFetch = result => {
      setNoticeArticles(result.notices);
      setRerender(false);
      setTotalPageCount(result.totalPages);
      setNoticeLoading(false);
    };

    async function foo(page, category, query, token, petsSex, petsAge) {
      if (category === 'favorite' && rerender) {
        setNoticeLoading(true);
        const result = await fetchFavoriteNotices(
          page,
          query,
          token,
          petsSex,
          petsAge
        );
        clearFetch(result);
      } else if (category === 'my-ads' && rerender) {
        setNoticeLoading(true);
        const result = await fetchOwnNotices(
          page,
          query,
          token,
          petsSex,
          petsAge
        );
        clearFetch(result);
      } else if (
        (category === 'sell' || 'lost-found' || 'for-free') &&
        rerender
      ) {
        setNoticeLoading(true);
        const result = await fetchNotices(
          page,
          category,
          query,
          petsSex,
          petsAge
        );
        clearFetch(result);
      }
    }
  }, [
    page,
    category,
    query,
    token,
    rerender,
    noticeArticles,
    setNoticeLoading,
    petsSex,
    petsAge,
  ]);

  return (
    <>
      <div>
        <Title text={t('notice_page_title')} />
        <NoticesFilter
          setQuery={setQuery}
          setPage={setPage}
          setRerender={setRerender}
        />
        <NoticeNavContainer>
          <NoticesCatagoriesNav
            setCategory={setCategory}
            setPage={setPage}
            setRerender={setRerender}
          />
          <BtnContainer>
            <NoticesDropFilter
              // showFilters={showFilters}
              // setShowFilters={setShowFilters}
              setPetsSex={setPetsSex}
              setPetsAge={setPetsAge}
              setRerender={setRerender}
            />
            <AddPetBtn setAlertShowModal={setAlertShowModal} />
          </BtnContainer>
        </NoticeNavContainer>
        <LoaderDiv>{notiseLoading && <LoaderPaws />}</LoaderDiv>

        {noticeArticles && (
          <NoticesCategoriesList
            articles={noticeArticles}
            setAlertShowModal={setAlertShowModal}
            setRerender={setRerender}
            category={category}
          />
        )}

        {totalPageCount > 1 && (
          <AppPagination
            setPage={setPage}
            page={page}
            totalPageCount={totalPageCount}
            setRerender={setRerender}
          />
        )}

        {!notiseLoading && noticeArticles.length === 0 && (
          <NoNotice>
            <img src={pets} alt="" styled={'background: transparent'} />
          </NoNotice>
        )}
      </div>

      {showAlertModal && (
        <AttentionModal setAlertShowModal={setAlertShowModal} />
      )}
    </>
  );
};

export default Notices;
