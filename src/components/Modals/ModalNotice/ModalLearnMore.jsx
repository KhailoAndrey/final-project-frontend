import { useEffect, useState } from 'react';
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
import svg from '../../../images/Icons/symbol-defs.svg';
import fetchNoticesById from 'fetch/noticeModalLearnMore';
// import { useSelector } from 'react-redux';
// import { useAuth } from  "../../../redux/auth/selectors"

export const ModalLearMore = ({ handler, handleAdd , id}) => {
 console.log("ModalLearMore  id:", id)
 
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
const [data, setNoticeData] = useState({})



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
      handler(false);
   }
 };

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        handler(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handler]);

  return (
    <ModalContainer  onClick={handleBackdropClick}>
      <ModalWindow>
        <CloseButton onClick={() => handler(false)}>
        <svg width={24} height={24}>
                <use href={`${svg}#icon-cross`} width={24} height={24} />
              </svg>
        </CloseButton>
        <Info>
          <Image img={data.file}>
            <Category> {[data.category]}</Category>
          </Image>
          <ContactInfo>
            <Description>{data.description || 'Cute dog looking for a home'}</Description>
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
          <ContactButtonAdd  >
            <span>Add to</span>
            <svg width="24" height="24">
            <use href={`${svg}#icon-heart`} width={24} height={24} />
            </svg>
          </ContactButtonAdd>
          {data.owner?.phone && <ContactButtonContact  onClick={() => handleContactClick(data.owner.phone)}>Contact</ContactButtonContact>}
        </ContactButtons>
      </ModalWindow>
    </ModalContainer>
  );
};