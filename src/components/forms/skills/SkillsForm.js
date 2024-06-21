import { useDispatch, useSelector } from 'react-redux';

//External
import { Button } from '../../button';
import { useFormik } from 'formik';
import { skillsValidationSchema } from './skillsValidation';
import { TextArea } from '../../textArea';
import { saveSkills } from '../../../features/formSlice';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

export const SkillsForm = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills);

  const formik = useFormik({
    initialValues: {
      technicalSkills: skills.technicalSkills || '',
      certificationDetails: skills.certificationDetails || '',
    },
    validationSchema: skillsValidationSchema,
    onSubmit: (values) => {
      dispatch(saveSkills(values));
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-full">
      <h3 className="text-xl sm:text-2xl font-semibold space-y-2 mb-6">Skills and Qualifications</h3>
      <TextArea
        label="Technical Skills"
        id="technical-skills"
        name="technicalSkills"
        rows="4"
        cols="50"
        value={formik.values.technicalSkills}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.technicalSkills && formik.errors.technicalSkills}
        required={true}
      />
      <TextArea
        label="Certifications"
        id="certification-details"
        name="certificationDetails"
        rows="4"
        cols="50"
        value={formik.values.certificationDetails}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.certificationDetails && formik.errors.certificationDetails}
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
