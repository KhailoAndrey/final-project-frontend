
import { NFText, NFImg, NFDivWrap, Button, PawIcon } from './NotFound.styled';
import { useNavigate } from 'react-router-dom';

 const NotFound = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <>
      <NFDivWrap>
        <NFText>Oops! This page not found...</NFText>
        <NFImg />
        <Button type="button" onClick={() => onClick()}>
          To main page
          <PawIcon />
        </Button>
      </NFDivWrap>
    </>
  );
};

export default NotFound;
