import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

//Icons
import { FaPlus, FaTrash } from "react-icons/fa6";

//External
import { InputField } from '../../inputField';
import { Button } from '../../button';
import { saveWorkExperience } from '../../../features/formSlice';
import { workExpValidationSchema } from './workValidation';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

export const WorkExperienceForm = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const workExperience = useSelector(state => state.workExperience);

  const initialValues = {
    workExperience: workExperience.length > 0 ? workExperience : [
      { company: '', title: '', duration: '' }
    ]
  };

  const formik = useFormik({
    initialValues,
    validationSchema: workExpValidationSchema,
    onSubmit: (values) => {
      dispatch(saveWorkExperience(values.workExperience));
      nextStep();
    }
  });

  const addRow = () => {
    formik.setFieldValue('workExperience', [...formik.values.workExperience, { company: '', title: '', duration: '' }]);
  };

  const removeRow = (index) => {
    const updatedWorkExperience = formik.values.workExperience.filter((_, i) => i !== index);
    formik.setFieldValue('workExperience', updatedWorkExperience);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-full">
      <h3 className="text-xl sm:text-2xl font-semibold space-y-2 mb-6">Work Experience</h3>
      {formik.values.workExperience.map((item, index) => (
        <div key={index} className="mb-6">
          <h3 className="block text-gray-700 font-bold mb-2 text-lg sm:text-xl">Experience {index + 1}</h3>
          <InputField
            label="Company Name"
            id={`company-${index}`}
            type="text"
            name={`workExperience[${index}].company`}
            placeholder="Company Name"
            value={formik.values.workExperience[index].company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.workExperience?.[index]?.company && formik.errors.workExperience?.[index]?.company}
            required={true}
          />

          <InputField
            label="Job Title"
            id={`title-${index}`}
            type="text"
            name={`workExperience[${index}].title`}
            placeholder="Job Title"
            value={formik.values.workExperience[index].title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.workExperience?.[index]?.title && formik.errors.workExperience?.[index]?.title}
            required={true}
          />

          <InputField
            label="Duration"
            id={`duration-${index}`}
            type="text"
            name={`workExperience[${index}].duration`}
            placeholder="Duration"
            value={formik.values.workExperience[index].duration}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.workExperience?.[index]?.duration && formik.errors.workExperience?.[index]?.duration}
            required={true}
          />

          {formik.values.workExperience.length > 1 && (
            <div className="text-right mb-2 flex justify-end">
              <button
                type="button"
                className="text-red-500 hover:text-red-700 flex justify-center items-center"
                onClick={() => removeRow(index)}
              >
                <FaTrash className="w-4 h-4 mx-1" />
                Remove
              </button>
            </div>
          )}
          {index < formik.values.workExperience.length - 1 && (
            <hr className="border-t-2 border-gray-300 my-6" />
          )}
        </div>
      ))}

      <div className="text-right mb-6 flex justify-end">
        <button
          type="button"
          className="text-blue-700 hover:text-blue-800 flex justify-center items-center"
          onClick={addRow}
        >
          <FaPlus className="w-5 h-5 mx-1" />
          Add Row
        </button>
      </div>

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