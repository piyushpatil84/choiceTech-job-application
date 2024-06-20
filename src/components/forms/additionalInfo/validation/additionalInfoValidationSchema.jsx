import * as Yup from 'yup'

export const additionalInfoValidationSchema = Yup.object({
  resume: Yup.mixed().required('Resume is required'),
})
