import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { t } from 'i18next';
import { addOwnPet } from 'redux/auth/authOperations';
import { useAuth } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import fetchAddNotices from 'fetch/noticeAdd';
import { Formik } from 'formik';
import { RadioBtn } from './RadioBtn/RadioBtn';
import { InputField } from './InputField/InputField';
import { CommentField } from './CommentField/CommentField';
import { UploadInput } from './UploadInput/UploadInput';
import { BtnNext, BtnCancel, BtnBack, BtnDone } from './buttons/buttons';
import { Title } from './Title/Title';
import { StageIndicator } from './StageIndicator/StageIndicator';
import { SexIcon } from './Icon/Icon';
import { addPetFormSchema } from 'components/Forms/AddPetForm/yupValidation';
import {
  FormWrapper,
  Wrapper,
  InputWrapper,
  GroupWrapper,
  BtnWrapper,
  ExtraWrapper,
  SexWrapper,
  GroupTitle,
  GroupSexWrapper,
  SexUploadWrapper,
  FlexWrapper,
  ErrWrapper,
} from './AddPetForm.styled';

const initialsValues = {
  title: '',
  date: '',
  type: '',
  name: '',
  location: '',
  price: '',
  comments: '',
  sex: '',
  category: 'my pet',
  // notice: '',
  file: '',
};
// const statuses = [
//   ['your pet', 'my pet'],
//   ['sell', 'sell'],
//   ['lost/found', 'lost-found'],
//   ['in good hands', 'for-free'],
// ];
// const sexes = [
//   [t('female'), 'female'],
//   [t('male'), 'male'],
// ];

const formTempValues = localStorage.getItem('formValues');
const initialsFormState = formTempValues
  ? JSON.parse(formTempValues)
  : initialsValues;

const formTempStage = localStorage.getItem('stage');
const initialsStage = formTempStage ? Number(JSON.parse(formTempStage)) : 1;

export const AddPetForm = () => {
  const [stage, SetStage] = useState(() => initialsStage);
  const [emulTouch, SetEmulTouch] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { token } = useAuth();
  const dispatch = useDispatch();
  
  const statuses = [
    [t('your_pet'), 'my pet'],
    [t('sell'), 'sell'],
    [t('lost_found'), 'lost-found'],
    [t('in_good_hands'), 'for-free'],
  ];

  const sexes = [
    [t('female'), 'female'],
    [t('male'), 'male'],
  ];

  const handleOnNextClick = async (values, errors, validateForm) => {
    let formIsValid;
    validateForm(values);
    const { category } = values;

    if (stage === 1) {
      formIsValid = true;
    }

    if (stage === 2 && category === 'your pet') {
      SetEmulTouch(['type', 'name', 'date']);
      if (errors.type || errors.name || errors.date) {
        formIsValid = false;
      } else {
        formIsValid = true;
      }
    }

    if (stage === 2 && category !== 'your pet') {
      SetEmulTouch(['type', 'name', 'date', 'title']);
      if (errors.type || errors.name || errors.date || errors.title) {
        formIsValid = false;
      } else {
        formIsValid = true;
      }
    }

    if (!formIsValid) {
      return;
    } else {
      SetStage(prevStage => prevStage + 1);
      localStorage.setItem('formValues', JSON.stringify(values));
      localStorage.setItem('stage', JSON.stringify(stage + 1));
    }
  };

  // кнопка назад
  const handleOnBackClick = () => {
    SetStage(prevStage => prevStage - 1);
    localStorage.setItem('stage', JSON.stringify(stage - 1));
    SetEmulTouch([]);
  };

  // кнопка відміна
  const handleOnCancelClick = () => {
    navigate(-1);
  };

  // фетч-запит для створення оголошення
  async function foo(formData, token) {
    await fetchAddNotices(formData, token);
  }

  // кнопка сабміт
  const handleOnSubmit = (values, { resetForm }) => {
    // console.log('values.category - ', values.category);

    const formData = new FormData();

    // якщо категорія - власна тварина
    if (values.category === 'my pet') {
      console.log('in my pet before formData');

      // переводимо дату у формат беку
      const rowDate = values.date;
      const newDate = `${rowDate.slice(8, rowDate.length)}-${rowDate.slice(
        5,
        7
      )}-${rowDate.slice(0, 4)}`;

      formData.append('name', values.name);
      formData.append('date', newDate);
      formData.append('type', values.type);
      formData.append('pet', values.file, 'Pet`s photo');
      if (values.comments) {
        formData.append('comments', values.comments);
      }

      // відправляємо дані на сервер і оновлюємо стор редаксу
      dispatch(addOwnPet(formData));
      navigate(`/user`);

      // якщо б.я. інша категорія
    } else {
      // формуємо форм-дату з правильними полями
      formData.append('title', values.title);
      formData.append('category', values.category);
      formData.append('name', values.name);
      const rowDate = values.date;
      const newDate = `${rowDate.slice(8, rowDate.length)}-${rowDate.slice(
        5,
        7
      )}-${rowDate.slice(0, 4)}`;
      formData.append('date', newDate);
      formData.append('type', values.type);
      formData.append('notice', values.file, 'Pet`s photo');
      formData.append('sex', values.sex);
      formData.append('location', values.location);

      if (values.comments) {
        formData.append('comments', values.comments);
      }
      if (values.category === 'sell') {
        formData.append('price', values.price);
      }

      // викликаємо функцію фетч-запиту
      foo(formData, token);
      navigate(`/notices/${values.category}`);
    }

    // загальні процеси після запиту
    localStorage.removeItem('formValues');
    localStorage.removeItem('stage');
    resetForm({});
    SetStage(1);
    SetEmulTouch([]);
  };

  return (
    <ExtraWrapper>
      <Formik
        initialValues={initialsFormState}
        onSubmit={handleOnSubmit}
        validationSchema={addPetFormSchema}
      >
        {({
          values,
          errors,
          touched,
          validateForm,
          handleChange,
          handleBlur,
        }) => {
          const { category, sex } = values;
          const isFieldInvalid = errors.sex && touched.sex;

          return (
            <Wrapper data-category={category}>
              <Title picked={category} stage={stage} />
              <StageIndicator stage={stage} category={category} />
              <FormWrapper>
                {stage === 1 && (
                  <GroupWrapper role="group">
                    {statuses.map(status => {
                      const selected = status[1] === category;

                      return (
                        <RadioBtn
                          key={status[0]}
                          value={status}
                          name="category"
                          selected={selected}
                        />
                      );
                    })}
                  </GroupWrapper>
                )}

                <FlexWrapper data-category={category}>
                  {stage === 3 && (
                    <SexUploadWrapper>
                      {category !== 'my pet' && (
                        <GroupSexWrapper role="group" aria-labelledby="sex">
                          <GroupTitle id="sex">{t('sex')}</GroupTitle>
                          <SexWrapper>
                            {sexes.map((option, index) => {
                              const iconLabel =
                                index === 0 ? '#female' : '#male';
                              const selected = option[1] === sex;

                              return (
                                <RadioBtn
                                  key={option[0]}
                                  value={option}
                                  name="sex"
                                  selected={selected}
                                  errors={errors}
                                  touched={touched}
                                >
                                  <SexIcon
                                    iconName={iconLabel}
                                    index={index}
                                    selected={selected}
                                    sex={sex}
                                  />
                                </RadioBtn>
                              );
                            })}
                            {isFieldInvalid && (
                              <ErrWrapper>{errors.sex}</ErrWrapper>
                            )}
                          </SexWrapper>
                        </GroupSexWrapper>
                      )}
                      <UploadInput
                        errors={errors}
                        category={category}
                        touched={touched}
                      />
                    </SexUploadWrapper>
                  )}

                  <InputWrapper>
                    {stage === 2 && category !== 'my pet' && (
                      <InputField
                        type="text"
                        name="title"
                        label={t('title_add')}
                        placeholder={t('title_add')}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 2 && (
                      <InputField
                        type="text"
                        name="name"
                        label={t('pet_name')}
                        placeholder={t('pn_placeholder')}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 2 && (
                      <InputField
                        type="date"
                        name="date"
                        label={t('date_of_birth')}
                        placeholder={t('db_pholder')}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 2 && (
                      <InputField
                        type="text"
                        name="type"
                        label={t('type')}
                        placeholder={t('type_enter')}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 3 && category !== 'my pet' && (
                      <InputField
                        type="text"
                        name="location"
                        label={t('location')}
                        placeholder={t('loc_enter')}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 3 && category === 'sell' && (
                      <InputField
                        type="number"
                        name="price"
                        label={t('price')}
                        placeholder={t('price_enter')}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 3 && (
                      <CommentField
                        errors={errors}
                        touched={touched}
                        category={category}
                        emulTouch={emulTouch}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comments}
                      />
                    )}
                  </InputWrapper>
                </FlexWrapper>
                {stage !== 3 && (
                  <BtnWrapper>
                    <BtnNext
                      onClick={() =>
                        handleOnNextClick(values, errors, validateForm)
                      }
                    />
                    {stage === 1 && <BtnCancel onClick={handleOnCancelClick} />}
                    {stage === 2 && <BtnBack onClick={handleOnBackClick} />}
                  </BtnWrapper>
                )}
                {stage === 3 && (
                  <BtnWrapper>
                    <BtnDone onSubmit={handleOnSubmit} />
                    <BtnBack onClick={handleOnBackClick} />
                  </BtnWrapper>
                )}
              </FormWrapper>
            </Wrapper>
          );
        }}
      </Formik>
    </ExtraWrapper>
  );
};
