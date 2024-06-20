import { useDispatch, useSelector } from 'react-redux';
import { InputField } from '../../inputField';
import { Button } from '../../button';
import { TextArea } from '../../textArea';
import { useFormik } from 'formik';
import { additionalInfoValidationSchema } from './validation';
import { saveAdditionalInfo } from '../../../features/formSlice';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

export const AdditionalInfoForm = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const additionalInfo = useSelector((state) => state.additionalInfo);

  const formik = useFormik({
    initialValues: {
      coverLetter: additionalInfo.coverLetter || '',
      resume: additionalInfo.resume || '',
    },
    validationSchema: additionalInfoValidationSchema,
    onSubmit: (values) => {
      dispatch(saveAdditionalInfo(values));
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-full">
      <h3 className="text-xl sm:text-2xl font-semibold space-y-2 mb-6">Additional Information</h3>
      <TextArea
        label="Cover Letter"
        id="cover-letter"
        name="coverLetter"
        rows="4"
        cols="50"
        value={formik.values.coverLetter}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.coverLetter && formik.errors.coverLetter}
      />
      <InputField
        label="Resume Upload"
        id="resume-upload"
        type="file"
        accept=".pdf,.doc,.docx"
        name="resume"
        onChange={(event) => formik.setFieldValue("resume", event.currentTarget.files[0])}
        onBlur={formik.handleBlur}
        error={formik.touched.resume && formik.errors.resume}
        required={true}
      />
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-full">
          <div className="mt-8 flex justify-between space-x-4">
            <Button
              onClick={prevStep}
              label={'Prev'}
              bgColor="bg-gray-500"
              hoverColor="hover:bg-gray-600"
              icon={<MdOutlineNavigateBefore
                className="h-6 w-6" />}
            />
            <Button
              type="submit"
              label="Next"
              bgColor="bg-purple-500"
              hoverColor="hover:bg-purple-400"
              icon={<MdOutlineNavigateNext className="h-6 w-6" />}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

