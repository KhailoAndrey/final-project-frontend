// import { useEffect } from 'react';
import { CatContainer, Input, Label } from './NoticesCatagoriesNav.styled';

const NoticesCatagoriesNav = ({ setCategory }) => {

  const onClick = e => {
    const category = e.currentTarget.value;
    console.log("readed category - ", category);
    setCategory(category);
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
    </CatContainer>
  );
};

export default NoticesCatagoriesNav;
