import { useDispatch, useSelector } from 'react-redux';
import { InputField } from '../../inputField';
import { Button } from '../../button';
import { useFormik } from 'formik';
import { educationValidationSchema } from './validation';
import { saveEducation } from '../../../features/formSlice';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'

export const EducationForm = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.education);

  const initialValues = education.length > 0 ? education : [
    { level: 'SSC', school: '', board: '', cgpa: '', year: '', isRequired: true },
    { level: 'HSC', school: '', board: '', cgpa: '', year: '', isRequired: true },
    { level: 'Graduation', school: '', board: '', cgpa: '', year: '', isRequired: true },
    { level: 'Post Graduation', school: '', board: '', cgpa: '', year: '', isRequired: true },
  ];

  const formik = useFormik({
    initialValues,
    validationSchema: educationValidationSchema,
    onSubmit: (values) => {
      dispatch(saveEducation(values));
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-full">
      <h3 className="text-xl sm:text-2xl font-semibold space-y-2 mb-6">Education</h3>
      {formik.values.map((item, index) => (
        <div key={index} className="mb-6">
          <h3 className="block text-gray-700 font-bold mb-2 text-lg sm:text-xl">{item.level}</h3>

          <InputField
            label="School/Institute Name"
            id={`school-${index}`}
            type="text"
            name={`[${index}].school`}
            placeholder="School/Institute Name"
            value={formik.values[index].school}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[index]?.school && formik.errors[index]?.school}
            required={item.isRequired}
          />

          <InputField
            label="Board/University"
            id={`board-${index}`}
            type="text"
            name={`[${index}].board`}
            placeholder="Board/University"
            value={formik.values[index].board}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[index]?.board && formik.errors[index]?.board}
            required={item.isRequired}
          />

          <InputField
            label="CGPA/Percentage"
            id={`cgpa-${index}`}
            type="text"
            name={`[${index}].cgpa`}
            placeholder="CGPA"
            value={formik.values[index].cgpa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[index]?.cgpa && formik.errors[index]?.cgpa}
            required={item.isRequired}
          />

          <InputField
            label="Passing Year"
            id={`year-${index}`}
            type="text"
            name={`[${index}].year`}
            placeholder="Passing Year"
            value={formik.values[index].year}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[index]?.year && formik.errors[index]?.year}
            required={item.isRequired}
          />

          {index < formik.values.length - 1 && (
            <hr className="border-t-2 border-gray-300 my-6" />
          )}
        </div>
      ))}

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-full">
          <div className="mt-8 flex justify-between space-x-4">
            <Button
              onClick={prevStep}
              label={'Prev'}
              bgColor="bg-gray-500"
              hoverColor="hover:bg-gray-600"
              icon={<MdOutlineNavigateBefore className="h-6 w-6" />}
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
