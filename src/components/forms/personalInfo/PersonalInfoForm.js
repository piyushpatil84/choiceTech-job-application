import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

//External
import { InputField } from '../../inputField';
import { Button } from '../../button';
import { MdOutlineNavigateNext } from 'react-icons/md';

//Schema
import { personalValidationSchema } from './validation';
import { savePersonalInfo } from '../../../features/formSlice';


export const PersonalInfoForm = ({ nextStep, }) => {
  const dispatch = useDispatch();
  const personalInfo = useSelector(state => state.personalInfo);

  const formik = useFormik({
    initialValues: {
      name: personalInfo.name || '',
      email: personalInfo.email || '',
      phone: personalInfo.phone || '',
      address: personalInfo.address || '',
    },
    validationSchema: personalValidationSchema,
    onSubmit: values => {
      dispatch(savePersonalInfo(values));
      nextStep()
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-full">
      <h3 className="text-xl sm:text-2xl font-semibold space-y-2 mb-6">Personal Information</h3>
      <InputField
        label="Full Name"
        id="full-name"
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
        required={true}
      />
      <InputField
        label="Email"
        id="email"
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
        required={true}
      />
      <InputField
        label="Phone"
        id="phone"
        type="tel"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && formik.errors.phone}
        required={true}
      />
      <InputField
        label="Address"
        id="address"
        type="text"
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.address && formik.errors.address}
        required={true}
      />
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <div className="mt-8 flex justify-end space-x-4">
            <Button
              type="submit"
              label="Next"
              bgColor="bg-purple-500"
              hoverColor="hover:bg-purple-400"
              disabled={!formik.isValid}
              icon={<MdOutlineNavigateNext className="ml-0.5 h-6 w-6" />}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
