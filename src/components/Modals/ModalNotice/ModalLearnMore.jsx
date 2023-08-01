import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import fetchNoticesById from 'fetch/noticeModalLearnMore';
import convertDateFormat from 'utils/formatDate';
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
  LinkEmail,
  LinkPhone,
} from './ModalLearnMore.styled';

export const ModalLearMore = ({
  handler,
  id,
  isFavorite,
  onFavBtnClick,
  setRerender,
}) => {
  const { t } = useTranslation();

  const [data, setNoticeData] = useState({});
  const [favChange, setFavChange] = useState(false);

  const { isLoggedIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNoticesById(id);
        const formattedDate = convertDateFormat(data.date);
        data.date = formattedDate;
        setNoticeData(data);
      } catch (error) {
        console.error('Error fetching notice:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleContactClick = phoneNumber => {
    if (!phoneNumber) return;
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      if (isLoggedIn & favChange & location.pathname.includes('favorite')) {
        setRerender(true);
      }

      handler(false);
    }
  };

  const onClick = () => {
    if (isLoggedIn & favChange & location.pathname.includes('favorite')) {
      setRerender(true);
    }
    handler(false);
  };

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        if (isLoggedIn & favChange & location.pathname.includes('favorite')) {
          setRerender(true);
        }
        handler(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [favChange, handler, isLoggedIn, location.pathname, setRerender]);

  return (
    <ModalContainer onClick={handleBackdropClick}>
      <ModalWindow>
        <CloseButton onClick={() => onClick()}>
          <svg width={24} height={24}>
            <use href={`${svg}#icon-cross`} width={24} height={24} />
          </svg>
        </CloseButton>
        <Info>
          <Image img={data.file}>
            <Category> {correctCategory(data.category, t)}</Category>
          </Image>
          <ContactInfo>
            <Description>{data.title}</Description>
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
                <div>{t(`${data.type}`)}</div>
                <div>{data.location}</div>
                <div>{t(`${data.sex}`)}</div>
                <div>{data.owner?.name}</div>
                {data.owner?.email && <LinkEmail href={`mailto:${data.owner.email}`}>{data.owner?.email}</LinkEmail>}
                {data.owner?.phone && <LinkPhone href={`tel:${data.owner.phone}`}>{data.owner?.phone}</LinkPhone>}
              </ContactContent>
            </Contact>
          </ContactInfo>
        </Info>
        <Comment>
          <b>{t('comment')}:</b> {data.comments}
        </Comment>
        <ContactButtons>
          <ContactButtonAdd
            onClick={() => {
              onFavBtnClick();
              setFavChange(true);
            }}
          >
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

ModalLearMore.propTypes = {
  handler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavBtnClick: PropTypes.func.isRequired,
};
