import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import fetchNoticesById from 'fetch/noticeModalLearnMore';
import { correctCategory } from 'components/Notices/NoticesCategories/NoticesCategoryItem/NoticeItemUtils';
import svg from '../../../images/Icons/symbol-defs.svg';
import {
  ModalContainer,
  ModalWindow,
  Info,
  Description,
  ContactInfo,
  Contact,
  Contactheader,
  ContactContent,
  Comment,
  ContactButtons,
  ContactButtonAdd,
  ContactButtonContact,
  Image,
  Category,
  CloseButton,
} from './ModalLearnMore.styled';

export const ModalLearMore = ({
  handler,
  handleAdd,
  id,
  isFavorite,
  onFavBtnClick,
  setRerender,
}) => {
  // console.log('ModalLearMore  id:', id);

  // const { isLoggedIn, getUser } = useAuth();

  // const dispatch = useDispatch();
  // const user = useSelector(getUser);
  // const isLogin = useSelector(isLoggedIn);

  // const [favorite, setFavorite] = useState(() => {
  //    if (isLogin && user && user.favorite && user.favorite.length > 0) {
  //      if (user.favorite.includes(_id)) {
  //        return true;
  //      } else {
  //        return false;
  //      }
  //    }
  //    return false;
  //  });

  // const handleFavoriteClick = () => {
  //    if (!isLogin) {
  //      console.log('You must be registered or logged in to continue the operation')

  //      return;
  //    }

  //    if (!favorite) {
  //      dispatch(fetchAddToFavorite(_id));
  //      setFavorite(true);
  //    } else {
  //      dispatch(fetchDeleteFavorite(_id));
  //      setFavorite(false);
  //    }
  //  };

  // ________________________________
  const { t } = useTranslation();

  const [data, setNoticeData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNoticesById(id);

        setNoticeData(data);
      } catch (error) {
        console.error('Error fetching notice:', error);
      }
    };

    fetchData();
  }, [id]);

  // ________________________________

  const handleContactClick = phoneNumber => {
    if (!phoneNumber) return;
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      setRerender(true);
      handler(false);
    }
  };

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        setRerender(true);
        handler(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handler, setRerender]);

  return (
    <ModalContainer onClick={handleBackdropClick}>
      <ModalWindow>
        <CloseButton
          onClick={() => {
            handler(false);
            setRerender(true);
          }}
        >
          <svg width={24} height={24}>
            <use href={`${svg}#icon-cross`} width={24} height={24} />
          </svg>
        </CloseButton>
        <Info>
          <Image img={data.file}>
            <Category> {correctCategory(data.category, t)}</Category>
          </Image>
          <ContactInfo>
            <Description>
              {data.description || 'Cute dog looking for a home'}
            </Description>
            <Contact>
              <Contactheader>
                <div>{t('name')}:</div>
                <div>{t('birthday')}:</div>
                <div>{t('type')}:</div>
                <div>{t('place')}:</div>
                <div>{t('sex')}:</div>
                <div>{t('owner')}:</div>
                {data.owner?.email && <div>{t('email')}:</div>}
                {data.owner?.phone && <div>{t('phone')}:</div>}
              </Contactheader>
              <ContactContent>
                <div>{data.name || data.title}</div>
                <div>{data.date}</div>
                <div>
                  {data.sex === 'male'
                    ? data.type === 'Cat'
                      ? t(`${'cat_m'}`)
                      : t(`${'dog_m'}`)
                    : data.type === 'Cat'
                    ? t(`${data.type}`)
                    : t(`${data.type}`)}
                </div>
                <div>{data.location}</div>
                <div>{t(`${data.sex}`)}</div>
                <div>{data.owner?.name}</div>
                {data.owner?.email && <div>{data.owner?.email}</div>}
                {data.owner?.phone && <div>{data.owner?.phone}</div>}
              </ContactContent>
            </Contact>
          </ContactInfo>
        </Info>
        <Comment>
          <b>{t('comment')}:</b> {data.comments}
        </Comment>
        <ContactButtons>
          <ContactButtonAdd onClick={() => onFavBtnClick()}>
            {isFavorite ? (
              <span>{t('remove')}</span>
            ) : (
              <span>{t('add_to')}</span>
            )}

            <svg width="24" height="24">
              <use href={`${svg}#icon-heart`} width={24} height={24} />
            </svg>
          </ContactButtonAdd>
          {data.owner?.phone && (
            <ContactButtonContact
              onClick={() => handleContactClick(data.owner.phone)}
            >
              {t('contact')}
            </ContactButtonContact>
          )}
        </ContactButtons>
      </ModalWindow>
    </ModalContainer>
  );
};
