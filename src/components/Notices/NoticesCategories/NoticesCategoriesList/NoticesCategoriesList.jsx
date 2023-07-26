import NoticeItem from 'components/Notices/NoticesCategories/NoticesCategoryItem/NoticeCategoryItem';
import { ListContainer } from 'components/Notices/NoticesCategories/NoticesCategoriesList/NoticesCategoriesList.styled';
import { useEffect } from 'react';

const NoticesCategoriesList = ({
  articles,
  setAlertShowModal,
  setRerender,
}) => {
  // console.log('articles :>> ', articles);

  useEffect(() => {}, []);

  return (
    <>
      <ListContainer>
        {articles.length > 0 &&
          articles.map(article => (
            <NoticeItem
              key={article._id}
              article={article}
              setAlertShowModal={setAlertShowModal}
              setRerender={setRerender}
            />
          ))}
      </ListContainer>
    </>
  );
};
export default NoticesCategoriesList;
