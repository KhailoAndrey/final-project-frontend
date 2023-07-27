import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';
import fetchNoticesById from 'fetch/noticeModalLearnMore';
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
  id,
  isFavorite,
  onFavBtnClick,
  setRerender,
}) => {
  // ________________________________
  const [data, setNoticeData] = useState({});
  const [favChange, setFavChange] = useState(false);

  const { isLoggedIn } = useAuth();
  const location = useLocation();

  // запит за даними
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

  // перехід на телефон для дзвінка
  const handleContactClick = phoneNumber => {
    if (!phoneNumber) return;
    window.location.href = `tel:${phoneNumber}`;
  };

  // закриття при кліку на бекдроп
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      if (isLoggedIn & favChange & location.pathname.includes('favorite')) {
        console.log('тре перерендер');
        setRerender(true);
      }

      handler(false);
    }
  };
  // закриття по хрестику
  const onClick = () => {
    if (isLoggedIn & favChange & location.pathname.includes('favorite')) {
      console.log('тре перерендер');
      setRerender(true);
    }
    handler(false);
  };
  // розмонтування і відміна слухача
  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        if (isLoggedIn & favChange & location.pathname.includes('favorite')) {
          console.log('тре перерендер');
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
            <Category> {[data.category]}</Category>
          </Image>
          <ContactInfo>
            <Description>
              {data.description || 'Cute dog looking for a home'}
            </Description>
            <Contact>
              <Contactheader>
                <div>Name:</div>
                <div>Birthday:</div>
                <div>Type:</div>
                <div>Place:</div>
                <div>The sex:</div>
                <div>Owner:</div>
                {data.owner?.email && <div>Email:</div>}
                {data.owner?.phone && <div>Phone:</div>}
              </Contactheader>
              <ContactContent>
                <div>{data.name || data.title}</div>
                <div>{data.date}</div>
                <div>{data.type}</div>
                <div>{data.location}</div>
                <div>{data.sex}</div>
                <div>{data.owner?.name}</div>
                {data.owner?.email && <div>{data.owner?.email}</div>}
                {data.owner?.phone && <div>{data.owner?.phone}</div>}
              </ContactContent>
            </Contact>
          </ContactInfo>
        </Info>
        <Comment>
          <b>Comments:</b> {data.comments}
        </Comment>
        <ContactButtons>
          <ContactButtonAdd
            onClick={() => {
              onFavBtnClick();
              setFavChange(true);
            }}
          >
            {isFavorite ? <span>Remove</span> : <span>Add to</span>}

            <svg width="24" height="24">
              <use href={`${svg}#icon-heart`} width={24} height={24} />
            </svg>
          </ContactButtonAdd>
          {data.owner?.phone && (
            <ContactButtonContact
              onClick={() => handleContactClick(data.owner.phone)}
            >
              Contact
            </ContactButtonContact>
          )}
        </ContactButtons>
      </ModalWindow>
    </ModalContainer>
  );
};
