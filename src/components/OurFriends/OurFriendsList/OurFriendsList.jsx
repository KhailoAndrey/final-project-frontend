import OurFriendItem from '../OurFriendItem/OurFriendItem';
import { OFWrapper } from './OurFriendsList.styled';
// import sponsors from '../../../Temp/sponsors.json';

const OurFriendsList = ({friends}) => {
  return (
    <>
      <OFWrapper>
        {friends.map((friend, _id) => (
          <OurFriendItem friend={friend} key={_id} />
        ))}
      </OFWrapper>
    </>
  );
};
export default OurFriendsList;
