import { t } from 'i18next';
import * as yup from 'yup';

export const addPetFormSchema = yup.object().shape({
  title: yup.string().when('category', {
    is: value => value !== 'my pet',
    then: () =>
      yup
        .string()
        .min(4, t('text_min_4'))
        .max(30, t('text_max_30'))
        .required(t('title_enter')),
    otherwise: () => yup.string(),
  }),
  date: yup.date().max(new Date(), t('date_max')).required(t('db_pholder')),
  type: yup
    .string('Must be a string')
    .min(2, t('text_min_2'))
    .max(16, t('text_max_16'))
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,16}$/, t('name_regexp'))
    .required(t('type_type')),
  name: yup
    .string()
    .min(2, t('text_min_2'))
    .max(16, t('text_max_16'))
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,16}$/, t('name_regexp'))
    .required(t('name_enter')),
  location: yup.string().when('category', {
    is: value => value !== 'my pet',
    then: () =>
      yup
        .string()
        .matches(
          /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+(?:,\s[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+)$/,
          t('loc_with')
        )
        // .matches(/^[A-Z][A-Za-z ]+$/, t('loc_with'))
        .required(t('loc_enter')),
    otherwise: () => yup.string(),
  }),
  price: yup.number().when('category', {
    is: value => value === 'sell',
    then: () =>
      yup.number().moreThan(0, t('price_err')).required(t('price_enter')),
    otherwise: () => yup.number(),
  }),
  comments: yup.string().min(4, t('text_min_4')).max(120, t('text_max_120')),
  sex: yup.string().when('category', {
    is: value =>
      value === 'sell' || value === 'lost-found' || value === 'for-free',
    then: () => yup.string().oneOf(['female', 'male']).required(t('pet_sex')),
    otherwise: () => yup.string(),
  }),
  category: yup
    .string()
    .oneOf(['my pet', 'sell', 'lost-found', 'for-free'])
    .required(),
  file: yup
    .mixed()
    .required(t('file_upload'))
    .test(
      'fileType',
      t('file_type'),
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    )
    .test('fileSize', t('file_size'), value => value?.size <= 3145728),
});
