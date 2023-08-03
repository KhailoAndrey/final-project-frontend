import { t } from 'i18next';
import * as yup from 'yup';
import {
  nameRegex,
  cityRegex,
  emailRegex,
  phoneRegex,
} from '../../const/Regex';

export const updateUserSchema = yup.object().shape({
  file: yup
    .mixed()
    .test('fileType', t('file_type'), value => !value || ['image/']),
  name: yup
    .string()
    .min(2, t('text_min_2'))
    .max(26, t('name_max'))
    .matches(nameRegex, t('user_name_err')),
  email: yup
    .string()
    .matches(emailRegex, `${t('example')}: user@mail.com`)
    .max(70, t('text_max_70'))
    .min(6, t('text_min_6'))
    .email(t('email_description')),
  birthday: yup.date().max(new Date(), t('date_max')),
  phone: yup.string().matches(phoneRegex, t('phone_valid')),
  city: yup
    .string()
    .min(2, t('text_min_2'))
    .max(35, t('text_max_35'))
    .matches(cityRegex, t('city_valid')),
});
