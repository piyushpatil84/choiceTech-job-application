import * as Yup from 'yup';

export const educationValidationSchema = Yup.array().of(
    Yup.object().shape({
      school: Yup.string().required('Required'),
      board: Yup.string().required('Required'),
      cgpa: Yup.string().required('Required'),
      year: Yup.string().required('Required'),
    })
  );