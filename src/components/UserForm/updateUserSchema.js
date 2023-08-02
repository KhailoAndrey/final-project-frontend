import { t } from 'i18next';
import * as yup from 'yup';
import { nameRegex, cityRegex } from 'const/Regex';



export const updateUserSchema = yup.object().shape({
  file: yup
    .mixed()
    .test('fileType', t('file_type'), value => !value || ['image/']),
  name: yup
    .string()
    .min(2, t('text_min_2'))
    .max(26, t('name_max'))
    .matches(/^([A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+\s?){2,26}$/, t('user_name_err')),
  email: yup
    .string()
    .matches(
      /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/,
      `${t('example')}: user@mail.com`
    )
    .max(70, t('text_max_70'))
    .min(6, t('text_min_6'))
    .email(t('email_description')),

  // birthday: yup.string().matches(
  //   // eslint-disable-next-line
  //   /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
  //   'Please enter a valid date: dd.mm.yyyy'
  // ),
  birthday: yup.date().max(new Date(), t('date_max')),
  // .matches(
  //   /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
  //   'Please enter a valid date: dd.mm.yyyy'
  // ),
  phone: yup.string().matches(/^\+380\d{9}$/, t('phone_valid')),
  city: yup
    .string()
    .min(2, t('text_min_2'))
    .max(35, t('text_max_35'))
    .matches(
      /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+(?:,\s*[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+)*$/,
      t('city_valid')
    ),
});
