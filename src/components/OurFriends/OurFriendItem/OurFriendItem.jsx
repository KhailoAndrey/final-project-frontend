import { useTranslation } from 'react-i18next';
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

const OurFriendItem = ({ friend, handleTimeHover, hoveredTime }) => {
  const currentDayOfWeek = new Date().getDay();
  const { t } = useTranslation();
  const weekDays = [
    t('mn'),
    t('tu'),
    t('we'),
    t('th'),
    t('fr'),
    t('sa'),
    t('su'),
  ];

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
              <FITTitle>{t('time')}:</FITTitle>
              <FITData>
                {friend.workDays && friend.workDays.length > 0
                  ? friend.workDays[currentDayOfWeek].isOpen
                    ? `${friend.workDays[currentDayOfWeek].from} - ${friend.workDays[currentDayOfWeek].to}`
                    : t('close')
                  : t('d&n')}
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
                                  : t('close')}
                              </WorkTime>
                            </WorkDayItem>
                          )
                      )
                    : t('d&n')}
                </WorkDaysList>
              )}
            </FIText>
            <FIText>
              <FITTitle>{t('address')}:</FITTitle>
              <FITAddress href={friend.addressUrl} target="_blank">
                {friend.address}
              </FITAddress>
            </FIText>
            <FIText>
              <FITTitle>{t('email')}:</FITTitle>
              <FITData href={`mailto:${friend.email}`}>{friend.email}</FITData>
            </FIText>
            <FIText>
              <FITTitle>{t('phone')}:</FITTitle>
              <FITData href={`tel:${friend.phone}`}>{friend.phone}</FITData>
            </FIText>
          </FIInfo>
        </FIContainer>
      </FIWrapper>
    </>
  );
};
export default OurFriendItem;
