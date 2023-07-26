import { useAuth } from 'redux/auth/selectors';
import { CatContainer, Input, Label } from './NoticesCatagoriesNav.styled';
import { useNavigate } from 'react-router-dom';

const NoticesCatagoriesNav = ({ setCategory, setPage }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const onClick = e => {
    const category = e.currentTarget.value;
    setCategory(category);
    setPage(1);
    navigate(`/notices/${category}`);
  };

  return (
    <CatContainer>
      <Input
        onClick={e => onClick(e)}
        type="radio"
        id="radio1"
        name="radios"
        value="sell"
        defaultChecked
      ></Input>
      <Label htmlFor="radio1">sell</Label>

      <Input
        onClick={e => onClick(e)}
        type="radio"
        id="radio2"
        name="radios"
        value="lost-found"
      ></Input>
      <Label htmlFor="radio2">lost/found</Label>

      <Input
        onClick={e => onClick(e)}
        type="radio"
        id="radio3"
        name="radios"
        value="for-free"
      ></Input>
      <Label htmlFor="radio3">in good hands</Label>

      {isLoggedIn && (
        <>
          <Input
            onClick={e => onClick(e)}
            type="radio"
            id="radio4"
            name="radios"
            value="favorite"
          ></Input>
          <Label htmlFor="radio4">favorite ads</Label>

          <Input
            onClick={e => onClick(e)}
            type="radio"
            id="radio5"
            name="radios"
            value="my-ads"
          ></Input>
          <Label htmlFor="radio5">my ads</Label>
        </>
      )}
    </CatContainer>
  );
};

export default NoticesCatagoriesNav;
