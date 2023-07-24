import { FIContainer, FIImage, FIInfo, FITData, FITTitle, FIText, FITitle, FIWrapper } from './OurFriendItem.styled';

const OurFriendItem = () => {
  return (
    <>
      <FIWrapper>
        <FITitle>Title</FITitle>
        <FIContainer>
          <FIImage>Photo</FIImage>
          <FIInfo>
            <FIText>
              <FITTitle>Time:</FITTitle>
              <FITData>8:00- 19:00</FITData>
            </FIText>
            <FIText>
              <FITTitle>Address:</FITTitle>
              <FITData>Promuslova Street, 56 </FITData>
            </FIText>
            <FIText>
              <FITTitle>Email:</FITTitle>
              <FITData>lkplev@gmail.com</FITData>
            </FIText>
            <FIText>
              <FITTitle>Phone:</FITTitle>
              <FITData>(032) 293-30-41</FITData>
            </FIText>
          </FIInfo>
        </FIContainer>
      </FIWrapper>
    </>
  );
};
export default OurFriendItem;
