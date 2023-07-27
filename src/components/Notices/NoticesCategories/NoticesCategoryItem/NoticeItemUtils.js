import { useTranslation } from "react-i18next";

export const calculateAge = birthdateString => {
  const [day, month, year] = birthdateString.split('-');
  const monthIndex = parseInt(month, 10) - 1;
  const birthdate = new Date(year, monthIndex, day);
  const today = new Date();
  const ageInMilliseconds = today - birthdate;
  const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
  const ageInYears = ageInMilliseconds / millisecondsInYear;
  const age = Math.floor(ageInYears);
  return age;
};

export const cutSity = location => {
  if (location.length > 5) {
    const sity = location.slice(0, 4) + '...';
    return sity;
  } else return location;
};

export const correctCategory = (bendCategory, t) => {

  let category;
  switch (bendCategory) {
    case 'sell':
      category = t('sell');
      break;

    case 'lost-found':
      category = t('lost_found');
      break;

    case 'for-free':
      category = t('in_good_hands');
      break;

    default:
      category = bendCategory;
  }
  return category;
};
