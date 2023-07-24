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

const OurFriendItem = ({ sponsor }) => {
  return (
    <>
      <FIWrapper>
        <FITitle href={sponsor.url} target="_blank">
          {sponsor.title}
        </FITitle>
        <FIContainer>
          <FIImage src={sponsor.imageUrl} />
          <FIInfo>
            <FIText>
              <FITTitle>Time:</FITTitle>
              <FITData>
                {sponsor.workDays
                  ? sponsor.workDays[0].isOpen
                    ? `${sponsor.workDays[0].from} - ${sponsor.workDays[0].to}`
                    : 'Close'
                  : 'Day and Night'}
              </FITData>
            </FIText>
            <FIText>
              <FITTitle>Address:</FITTitle>
              <FITAddress>{sponsor.address}</FITAddress>
            </FIText>
            <FIText>
              <FITTitle>Email:</FITTitle>
              <FITData>{sponsor.email}</FITData>
            </FIText>
            <FIText>
              <FITTitle>Phone:</FITTitle>
              <FITData>{sponsor.phone}</FITData>
            </FIText>
          </FIInfo>
        </FIContainer>
      </FIWrapper>
    </>
  );
};
export default OurFriendItem;
