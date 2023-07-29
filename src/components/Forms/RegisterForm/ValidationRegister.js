import * as Yup from 'yup';
import { t } from 'i18next';
// const { t } = useTranslation();

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(t('requried_name_field'))
    .min(2, t('name_min'))
    .max(16, t('name_max'))
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,16}$/, t('name_regexp')),
  email: Yup.string()
    .email(t('email_description'))
    .required(t('requried_email_field'))
    .matches(/^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/, t('email_regexp')),
  password: Yup.string()
    .required(t('requried_password_field'))
    .min(6, t('password_min'))
    .max(16, t('password_max'))
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, t('password_regexp')),
  confirmPassword: Yup.string().when('password', (password, schema) => {
    return password
      ? schema
          .required(t('requried_confirm_pas_field'))
          .oneOf([Yup.ref('password')], t('confirm_password_regexp'))
      : schema.notRequired();
  }),
});
