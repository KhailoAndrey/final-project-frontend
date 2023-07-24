import OurFriendItem from '../OurFriendItem/OurFriendItem';
import { OFWrapper } from './OurFriendsList.styled';
import sponsors from '../../../Temp/sponsors.json';

const OurFriendsList = () => {
  return (
    <>
      <OFWrapper>
        {sponsors.map((sponsor, index) => (
          <OurFriendItem sponsor={sponsor} key={index} />
        ))}
      </OFWrapper>
    </>
  );
};
export default OurFriendsList;
