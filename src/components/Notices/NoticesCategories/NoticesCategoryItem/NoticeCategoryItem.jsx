import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'redux/auth/selectors';
import { calculateAge, cutSity, correctCategory } from './NoticeItemUtils';
import svg from '../../../../images/Icons/symbol-defs.svg';
import { ModalLearMore } from 'components/Modals/ModalNotice/ModalLearnMore';
import { addToFavorite, delFromFavorite } from 'redux/auth/authOperations';
import {
  Card,
  ImgContainer,
  PetPhoto,
  Category,
  FavBtn,
  InfoContainer,
  Information,
  Title,
  LearnMoreBtn,
  BottomContainer,
  DelBtn,
} from './NoticeCategoryItem.styled';
import fetchDeleteNotices from 'fetch/noticeDelete';
import DeleteModal from 'components/Modals/ModalApproveAction/DeleteModal';

const NoticeItem = ({ article, setAlertShowModal, setRerender, setCrutch }) => {
  const [showLearMore, setShowLearMore] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { user, isLoggedIn, token } = useAuth();
  const { _id, title, category, date, file, sex, location, owner } = article;

  const age = calculateAge(date);
  const sity = cutSity(location);
  const rightCategory = correctCategory(category, t);
  const isFavorite = isLoggedIn ? user.favorite.includes(_id) : false;
  const isOwner = user._id === owner;

  const data = {
    title: 'Delete advertisment?',
    text: `Are you sure you want to delete "${title}"? You can't undo this action.`,
    icon: 'icon-trash',
  };

  useEffect(() => {
    // console.log('showLearMore', showLearMore);
    setCrutch(showLearMore);
  }, [showLearMore, setCrutch]);

  const onFavBtnClick = () => {
    if (!isLoggedIn) {
      setAlertShowModal(true);
    } else {
      if (!isFavorite) {
        dispatch(addToFavorite(_id));
      }
      if (isFavorite) {
        dispatch(delFromFavorite(_id));
      }
    }
  };

  const onDelBtnClick = () => {
    async function foo(_id, token) {
      await fetchDeleteNotices(_id, token);
      setRerender(true);
    }
    foo(_id, token);
  };

  return (
    <Card id={_id}>
      <ImgContainer>
        <PetPhoto src={`${file}`} alt="pretty pet" />
        <Category>
          <p>{rightCategory}</p>
        </Category>

        <div>
          <FavBtn type="button" onClick={() => onFavBtnClick()}>
            {isFavorite ? (
              <svg width={24} height={24}>
                <use
                  href={`${svg}#icon-heart-fill`}
                  width={24}
                  height={24}
                  id="heart"
                />
              </svg>
            ) : (
              <svg width={24} height={24}>
                <use
                  href={`${svg}#icon-heart`}
                  width={24}
                  height={24}
                  style={{ stroke: 'var(--main-clr-blue)' }}
                  id="heart"
                />
              </svg>
            )}
          </FavBtn>
          {isOwner && (
            <DelBtn type="button" onClick={() => setShowDelModal(true)}>
              <svg width={24} height={24}>
                <use href={`${svg}#icon-trash`} width={24} height={24} />
              </svg>
            </DelBtn>
          )}
        </div>
        <InfoContainer>
          <Information>
            <svg width={24} height={24}>
              <use
                href={`${svg}#icon-location`}
                width={24}
                height={24}
                style={{ stroke: 'var(--main-clr-blue)' }}
              />
            </svg>
            <p>{sity}</p>
          </Information>
          <Information>
            <svg width={24} height={24}>
              <use
                href={`${svg}#icon-clock`}
                width={24}
                height={24}
                style={{ stroke: 'var(--main-clr-blue)' }}
              />
            </svg>
            <p>
              {age < 1 && `<1 ${t('min_year')} `}
              {age === 1 && `1 ${t('year')}`}
              {age > 1 && age < 5 && `${age} ${t('years')}`}
              {age >= 5 && `${age} ${t('big_years')}`}
            </p>
          </Information>
          <Information>
            {sex === 'male' ? (
              <svg width={24} height={24}>
                <use
                  href={`${svg}#icon-male`}
                  style={{ stroke: 'var(--main-clr-blue)' }}
                  width={24}
                  height={24}
                />
              </svg>
            ) : (
              <svg width={24} height={24}>
                <use
                  href={`${svg}#icon-female`}
                  width={24}
                  height={24}
                  style={{ stroke: 'var(--main-clr-blue)' }}
                />
              </svg>
            )}
            <p>{t(sex === 'male' ? 'male' : 'female')}</p>
          </Information>
        </InfoContainer>
      </ImgContainer>
      <BottomContainer>
        <Title>{title}</Title>
        <LearnMoreBtn type="button" onClick={() => setShowLearMore(true)}>
          {t('learn_more')}
          <svg width={24} height={24}>
            <use href={`${svg}#icon-paw`} width={24} height={24} />
          </svg>
        </LearnMoreBtn>
      </BottomContainer>
      {showLearMore && (
        <ModalLearMore
          handler={setShowLearMore}
          id={article._id}
          isFavorite={isFavorite}
          onFavBtnClick={onFavBtnClick}
          setRerender={setRerender}
        />
      )}
      {showDelModal && (
        <DeleteModal
          onClose={setShowDelModal}
          handleDelete={onDelBtnClick}
          data={data}
        />
      )}
    </Card>
  );
};

export default NoticeItem;
