import * as Yup from 'yup'

export const workExpValidationSchema = Yup.object().shape({
  workExperience: Yup.array().of(
    Yup.object().shape({
      company: Yup.string().required('Company Name is required'),
      title: Yup.string().required('Job Title is required'),
      duration: Yup.string().required('Duration is required'),
    }),
  ),
})
