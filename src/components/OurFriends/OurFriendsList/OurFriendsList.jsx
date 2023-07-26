import { useState } from 'react';
import OurFriendItem from '../OurFriendItem/OurFriendItem';
import { OFWrapper } from './OurFriendsList.styled';

const OurFriendsList = ({ friends }) => {
  const [hoveredTime, setHoveredTime] = useState('');

  const handleTimeHover = index => {
    setHoveredTime(index);
  };
  return (
    <>
      <OFWrapper>
        {friends.map((friend, _id) => (
          <OurFriendItem
            friend={friend}
            key={_id}
            handleTimeHover={handleTimeHover}
            hoveredTime={hoveredTime}
          />
        ))}
      </OFWrapper>
    </>
  );
};
export default OurFriendsList;
