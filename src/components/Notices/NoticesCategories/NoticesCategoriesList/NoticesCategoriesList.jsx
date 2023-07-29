import NoticeItem from 'components/Notices/NoticesCategories/NoticesCategoryItem/NoticeCategoryItem';
import { ListContainer } from 'components/Notices/NoticesCategories/NoticesCategoriesList/NoticesCategoriesList.styled';
import { useEffect, useState } from 'react';
import { useAuth } from 'redux/auth/selectors';


const NoticesCategoriesList = ({
  articles,
  setAlertShowModal,
  setRerender,
  category
}) => {
  // console.log('articles :>> ', articles);
  const { user } = useAuth();
  const [crutch, setCrutch] = useState(false);

  useEffect(() => {
    if (category === 'favorite' && !crutch) {
      setRerender(true);
    }
  }, [user.favorite, category, setRerender, crutch]);

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
              setCrutch={setCrutch}
            />
          ))}
      </ListContainer>
    </>
  );
};
export default NoticesCategoriesList;
