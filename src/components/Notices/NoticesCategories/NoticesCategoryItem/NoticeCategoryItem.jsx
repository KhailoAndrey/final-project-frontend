import { useAuth } from 'redux/auth/selectors';
import { calculateAge, cutSity, correctCategory } from './NoticeItemUtils';
import svg from '../../../../images/Icons/symbol-defs.svg';
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
import { ModalLearMore } from 'components/Modals/ModalNotice/ModalLearnMore';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorite, delFromFavorite } from 'redux/auth/authOperations';

const NoticeItem = ({ article, setAlertShowModal ,setRerender}) => {
  // console.log('article :>> ', article);
  const [showLearMore, setShowLearMore] = useState(false);
  // const [rerender, setRerender] = useState(false);
  const dispatch = useDispatch();

  const { user, isLoggedIn } = useAuth();
  const { _id, title, category, date, file, sex, location, owner } = article;

  const age = calculateAge(date);
  const sity = cutSity(location);
  const rightCategory = correctCategory(category);
  const isFavorite = isLoggedIn ? user.favorite.includes(_id) : false;
  const isOwner = user._id === owner;
  // console.log('user._id :>> ', user._id);
  // console.log('owner :>> ', owner);
  // console.log(isOwner);

  // useEffect(() => {
  //   if (rerender === true) {

  //     console.log('should rerender');
  //   }
  // }, [rerender]);

  const onFavBtnClick = () => {
    console.log('horey!');
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
                <use href={`${svg}#icon-heart-fill`} width={24} height={24} />
              </svg>
            ) : (
              <svg width={24} height={24}>
                <use
                  href={`${svg}#icon-heart`}
                  width={24}
                  height={24}
                  style={{ stroke: 'var(--main-clr-blue)' }}
                />
              </svg>
            )}
          </FavBtn>
          {isOwner && (
            <DelBtn type="button">
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
              {age < 1 && '<1 year'}
              {age === 1 && '1 year'}
              {age > 1 && `${age} years`}
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
            <p>{sex}</p>
          </Information>
        </InfoContainer>
      </ImgContainer>
      <BottomContainer>
        <Title>{title}</Title>
        <LearnMoreBtn type="button" onClick={() => setShowLearMore(true)}>
          Learn more
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
    </Card>
  );
};

export default NoticeItem;
