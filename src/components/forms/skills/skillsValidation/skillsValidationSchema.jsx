import * as Yup from 'yup'

export const skillsValidationSchema = Yup.object({
  technicalSkills: Yup.string().required('Technical skills are required'),
})
