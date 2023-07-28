import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';

import { RadioBtn } from './RadioBtn/RadioBtn';
import { InputField } from './InputField/InputField';
import { CommentField } from './CommentField/CommentField';
import { UploadInput } from './UploadInput/UploadInput';
import { BtnNext, BtnCancel, BtnBack, BtnDone } from './buttons/buttons';
import { Title } from './Title/Title';
import { StageIndicator } from './StageIndicator/StageIndicator';
import { SexIcon } from './Icon/Icon';
import { addPetFormSchema } from 'components/Forms/AddPetForm/yupValidation';
import { Formik } from 'formik';
// import { notify } from '../AddPetForm/notification/notification';
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
import fetchAddNotices from 'fetch/noticeAdd';

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
const statuses = [
  ['your pet', 'my pet'],
  ['sell', 'sell'],
  ['lost/found', 'lost-found'],
  ['in good hands', 'for-free'],
];
const sexes = [
  ['Female', 'female'],
  ['Male', 'male'],
];

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

  const { token } = useAuth();

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
    console.log('values.category - ', values.category);

    const formData = new FormData();

    if (values.category === 'my pet') {
      console.log('in my pet before formData');
      formData.append('name', values.name);
      formData.append('date', values.date);
      // formData.append('type', values.type);
      const rowDate = values.date;
      // console.log('rowDate :>> ', rowDate);
      const newDate = `${rowDate.slice(8, rowDate.length)}-${rowDate.slice(
        5,
        7
      )}-${rowDate.slice(0, 4)}`;
      // console.log('newDate', newDate);
      formData.append('date', newDate);

      formData.append('notice', values.file, 'Pet`s photo');
      if (values.comments) {
        formData.append('comments', values.comments);
        console.log('values.comments - ', values.comments);
      }
      // try {
      //   await createPet(formData);
      //   // navigate('/users');
      // } catch (error) {
      //   console.log(error);
      //   notify('error', 'Sorry, something wrong. Please try again');
      // }
      console.log('category = my pet ends');
    } else {
      formData.append('title', values.title);
      formData.append('category', values.category);
      formData.append('name', values.name);
      const rowDate = values.date;
      // console.log('rowDate :>> ', rowDate);
      const newDate = `${rowDate.slice(8, rowDate.length)}-${rowDate.slice(
        5,
        7
      )}-${rowDate.slice(0, 4)}`;
      // console.log('newDate', newDate);
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

      foo(formData, token);
    }

    // try {
    //   await createNotice(formData);
    //   navigate(`/notices/${values.category}`);
    // } catch (error) {
    //   console.log(error);
    //   notify('error', 'Sorry, something wrong. Please try again');
    // }

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
                          <GroupTitle id="sex">The sex</GroupTitle>
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
                        label={'Title of add'}
                        placeholder={'Title of add'}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 2 && (
                      <InputField
                        type="text"
                        name="name"
                        label={"Pet's name"}
                        placeholder={"Type your pet's name "}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 2 && (
                      <InputField
                        type="date"
                        name="date"
                        label={'Date of birth'}
                        placeholder={'Choose a date of birth'}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 2 && (
                      <InputField
                        type="text"
                        name="type"
                        label={'Type'}
                        placeholder={'Type type'}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 3 && category !== 'my pet' && (
                      <InputField
                        type="text"
                        name="location"
                        label={'Location'}
                        placeholder={'Type your location'}
                        errors={errors}
                        touched={touched}
                        emulTouch={emulTouch}
                      />
                    )}

                    {stage === 3 && category === 'sell' && (
                      <InputField
                        type="number"
                        name="price"
                        label={'Price'}
                        placeholder={'Type price'}
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
