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
  WorkDayItem,
  WorkDays,
  WorkDaysList,
  WorkTime,
} from './OurFriendItem.styled';

const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

const OurFriendItem = ({ friend, handleTimeHover, hoveredTime }) => {
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
            <FIText
              onMouseEnter={() => handleTimeHover(friend.imageUrl)}
              onMouseLeave={() => handleTimeHover('')}
            >
              <FITTitle>Time:</FITTitle>
              <FITData>
                {friend.workDays && friend.workDays.length > 0
                  ? friend.workDays[currentDayOfWeek].isOpen
                    ? `${friend.workDays[currentDayOfWeek].from} - ${friend.workDays[currentDayOfWeek].to}`
                    : 'Close'
                  : 'Day and Night'}
              </FITData>
              {hoveredTime === friend.imageUrl && (
                <WorkDaysList>
                  {friend.workDays && friend.workDays.length > 0
                    ? friend.workDays.map(
                        (workDay, index) =>
                          workDay && (
                            <WorkDayItem key={index}>
                              <WorkDays>{weekDays[index]}: </WorkDays>
                              <WorkTime>
                                {workDay.isOpen
                                  ? `${workDay.from} - ${workDay.to}`
                                  : 'Closed'}
                              </WorkTime>
                            </WorkDayItem>
                          )
                      )
                    : 'Day and Night'}
                </WorkDaysList>
              )}
            </FIText>
            <FIText>
              <FITTitle>Address:</FITTitle>
              <FITAddress href={friend.addressUrl} target="_blank">
                {friend.address}
              </FITAddress>
            </FIText>
            <FIText>
              <FITTitle>Email:</FITTitle>
              <FITData href={`mailto:${friend.email}`}>{friend.email}</FITData>
            </FIText>
            <FIText>
              <FITTitle>Phone:</FITTitle>
              <FITData href={`tel:${friend.phone}`}>{friend.phone}</FITData>
            </FIText>
          </FIInfo>
        </FIContainer>
      </FIWrapper>
    </>
  );
};
export default OurFriendItem;
