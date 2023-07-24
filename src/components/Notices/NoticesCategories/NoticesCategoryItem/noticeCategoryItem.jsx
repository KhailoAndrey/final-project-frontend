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

const NoticeItem = ({ article }) => {
  // console.log('article :>> ', article);

  const isFavorite = false;
  const { _id, title, category, date, file, sex, location } = article;

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
            <p>{location}</p>
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
            <p>{date}</p>
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
        <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
      </BottomContainer>
    </Card>
  );
};

export default NoticeItem;
