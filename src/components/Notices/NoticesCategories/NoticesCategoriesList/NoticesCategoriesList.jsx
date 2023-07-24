import NoticeItem from 'components/Notices/NoticesCategories/NoticesCategoryItem/noticeCategoryItem';
import { ListContainer } from 'components/Notices/NoticesCategories/NoticesCategoriesList/NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ articles }) => {
  // console.log('articles :>> ', articles);

  return (
    <>
      <ListContainer>
        {articles.length > 0 &&
          articles.map(article => (
            <NoticeItem key={article._id} article={article} />
          ))}
      </ListContainer>
    </>
  );
};
export default NoticesCategoriesList;
