import OurFriendItem from '../OurFriendItem/OurFriendItem';
import { OFWrapper } from './OurFriendsList.styled';
import sponsors from '../../../Temp/sponsors.json'

const OurFriendsList = () => {
  // console.log(sponsors)
  return (
    <>
      <OFWrapper>
        {sponsors.map((sponsor, index) =>          
          // console.log(sponsor)
          <OurFriendItem sponsor={sponsor} key={index} />
          )}
      {/* <OurFriendItem />
      <OurFriendItem />
      <OurFriendItem />
      <OurFriendItem />
      <OurFriendItem />
      <OurFriendItem />
      <OurFriendItem />
      <OurFriendItem /> */}
      </OFWrapper>
    </>
  );
};
export default OurFriendsList;
