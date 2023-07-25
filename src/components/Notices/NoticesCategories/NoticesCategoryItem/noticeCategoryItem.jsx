import { useAuth } from 'redux/auth/selectors';
import { calculateAge, cutSity } from './noticeItemUtils';
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
} from './noticeCategoryItem.styled';
import { ModalLearMore } from 'components/Modals/ModalNotice/ModalLearnMore';
import { useState } from 'react';

const NoticeItem = ({ article }) => {
  // console.log('article :>> ', article);
  const [showLearMore, setShowLearMore] = useState(false);
  const { _id, title, category, date, file, sex, location } = article;

  const age = calculateAge(date);
  const sity = cutSity(location);

  const { user, isLoggedIn } = useAuth();

  const isFavorite =  isLoggedIn ? user.favorite.includes(_id) : false;

  return (
    <Card id={_id}>
      <ImgContainer>
        <PetPhoto src={`${file}`} alt="pretty pet" />
        <Category>
          <p>{category}</p>
        </Category>
        <FavBtn type="button">
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
        <LearnMoreBtn type="button" onClick={() => setShowLearMore(true)}>Learn more</LearnMoreBtn>
      </BottomContainer>
      {showLearMore && <ModalLearMore handler={setShowLearMore} id={article._id}/>}
    </Card>
  );
};

export default NoticeItem;
