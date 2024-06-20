import { useSelector } from 'react-redux';
import { Button } from '../../button';
import { MdOutlineNavigateBefore } from 'react-icons/md';

export const ReviewForm = ({ prevStep, showSuccess, handleStartOver, handleSubmit }) => {
  const formData = useSelector((state) => state);

  const { personalInfo, education, workExperience, skills, additionalInfo } = formData;

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Review Your Application</h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2">Personal Information</h3>
          <div className="space-y-2">
            <p><strong>Name:</strong> {personalInfo.name}</p>
            <p><strong>Email:</strong> {personalInfo.email}</p>
            <p><strong>Phone:</strong> {personalInfo.phone}</p>
            <p><strong>Address:</strong> {personalInfo.address}</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2">Education</h3>
          <ul className="space-y-4">
            {education.map((edu, index) => (
              <li key={index} className="space-y-2">
                <p className='font-semibold'>{edu.level}</p>
                <p><strong>School/Institute Name:</strong> {edu.school}</p>
                <p><strong>Board/University:</strong> {edu.board}</p>
                <p><strong>CGPA:</strong> {edu.cgpa}</p>
                <p><strong>Passing Year:</strong> {edu.year}</p>
                {index < education.length - 1 && (
                  <hr className="border-t-2 border-gray-300 my-6" />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2">Work Experience</h3>
          <ul className="space-y-4">
            {workExperience.map((exp, index) => (
              <li key={index} className="space-y-2">
                <p><strong>Company Name:</strong> {exp.company}</p>
                <p><strong>Job Title:</strong> {exp.title}</p>
                <p><strong>Duration:</strong> {exp.duration}</p>
                {index < workExperience.length - 1 && (
                  <hr className="border-t-2 border-gray-300 my-6" />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2">Skills and Qualifications</h3>
          <p><strong>Technical Skills:</strong> {skills.technicalSkills}</p>
          <p><strong>Certifications:</strong> {skills.certificationDetails}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2">Additional Information</h3>
          <div className="space-y-2">
            <p><strong>Cover Letter:</strong></p>
            <pre className="whitespace-pre-wrap">{additionalInfo.coverLetter}</pre>
            <p><strong>Resume:</strong> {additionalInfo.resume.name}</p>
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-full">
          <div className="mt-8 flex justify-between space-x-4">
            <Button
              onClick={showSuccess ? handleStartOver : prevStep}
              label={showSuccess ? 'Start Over' : 'Prev'}
              bgColor="bg-gray-500"
              hoverColor="hover:bg-gray-600"
              icon={<MdOutlineNavigateBefore
                className="h-6 w-6" />}
            />
            {!showSuccess && (
              <Button
                onClick={handleSubmit}
                label="Submit"
                bgColor="bg-indigo-600"
                hoverColor="hover:bg-indigo-700"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
