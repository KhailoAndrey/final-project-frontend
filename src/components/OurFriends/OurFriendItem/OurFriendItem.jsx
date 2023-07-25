import {
  FIContainer,
  FIImage,
  FIInfo,
  FITAddress,
  FITData,
  FITTitle,
  FIText,
  FITitle,
  FIWrapper,
} from './OurFriendItem.styled';

const OurFriendItem = ({ friend }) => {
  const currentDayOfWeek = new Date().getDay();
  return (
    <>
      <FIWrapper>
        <FITitle href={friend.url} target="_blank">
          {friend.title}
        </FITitle>
        <FIContainer>
          <FIImage src={friend.imageUrl} />
          <FIInfo>
            <FIText>
              <FITTitle>Time:</FITTitle>
              <FITData>
                {friend.workDays && friend.workDays.length > 0
                  ? friend.workDays[currentDayOfWeek].isOpen
                    ? `${friend.workDays[currentDayOfWeek].from} - ${friend.workDays[currentDayOfWeek].to}`
                    : 'Close'
                  : 'Day and Night'}
              </FITData>
            </FIText>
            <FIText>
              <FITTitle>Address:</FITTitle>
              <FITAddress>{friend.address}</FITAddress>
            </FIText>
            <FIText>
              <FITTitle>Email:</FITTitle>
              <FITData>{friend.email}</FITData>
            </FIText>
            <FIText>
              <FITTitle>Phone:</FITTitle>
              <FITData>{friend.phone}</FITData>
            </FIText>
          </FIInfo>
        </FIContainer>
      </FIWrapper>
    </>
  );
};
export default OurFriendItem;
