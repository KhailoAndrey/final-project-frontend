import NoticeItem from 'components/Notices/NoticesCategories/NoticesCategoryItem/NoticeCategoryItem';
import { ListContainer } from 'components/Notices/NoticesCategories/NoticesCategoriesList/NoticesCategoriesList.styled';
import { useEffect } from 'react';

const NoticesCategoriesList = ({
  articles,
  urlCategory,
  setAlertShowModal,
}) => {
  // console.log('articles :>> ', articles);

  useEffect(() => { }, []);

  return (
    <>
      <ListContainer>
        {articles.length > 0 &&
          articles.map(article => (
            <NoticeItem
              key={article._id}
              article={article}
              urlCategory={urlCategory}
              setAlertShowModal={setAlertShowModal}
            />
          ))}
      </ListContainer>
    </>
  );
};
export default NoticesCategoriesList;
