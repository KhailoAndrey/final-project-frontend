import NoticeItem from 'components/Notices/NoticesCategories/NoticesCategoryItem/NoticeCategoryItem';
import { ListContainer } from 'components/Notices/NoticesCategories/NoticesCategoriesList/NoticesCategoriesList.styled';
import { useEffect, useState } from 'react';
import { useAuth } from 'redux/auth/selectors';
import PropTypes from 'prop-types';

const NoticesCategoriesList = ({
  articles,
  setAlertShowModal,
  setRerender,
  category,
}) => {
  const { user } = useAuth();
  const [crutch, setCrutch] = useState(false);

  useEffect(() => {
    if (category === 'favorite' && !crutch) {
      setRerender(true);
    }
  }, [user.favorite, category, setRerender, crutch]);

  return (
    <>
    <div>
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
    </div>
    </>
  );
};

export default NoticesCategoriesList;

NoticesCategoriesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAlertShowModal: PropTypes.func.isRequired,
  setRerender: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
