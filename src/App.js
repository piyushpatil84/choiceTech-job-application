import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//External
import { AdditionalInfoForm, EducationForm, PersonalInfoForm, ReviewForm, SkillsForm, WorkExperienceForm } from './components/forms';
import { clearForm } from './features/formSlice';
import { ProgressBar } from './components/progressBar';
import choicetechlabLogo from './assets/choice.png';

const App = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const totalSteps = 6;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => setShowSuccess(true);

  const currentStepComponent = () => {
    switch (step) {
      case 1:
        return <PersonalInfoForm nextStep={nextStep} />;
      case 2:
        return <EducationForm nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <WorkExperienceForm nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <SkillsForm nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <AdditionalInfoForm nextStep={nextStep} prevStep={prevStep} />;
      case 6:
        return <ReviewForm prevStep={prevStep}
          handleSubmit={handleSubmit}
          showSuccess={showSuccess}
          handleStartOver={handleStartOver}
        />;
      default:
        return null;
    }
  };

  const handleStartOver = () => {
    setStep(1);
    setShowSuccess(false);
    dispatch(clearForm());
  };
  return (
    <Router>
      <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
          <div className="flex items-center justify-center mb-4">
            <img src={choicetechlabLogo} alt="Choicetechlab Logo" className="h-8 sm:h-10 mr-2" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-0 ml-1">
              Job Application
            </h1>
          </div>
          {!showSuccess &&
            <ProgressBar step={step} totalSteps={totalSteps} />
          }

          <Routes>
            <Route path="/" element={currentStepComponent()} />
          </Routes>

        </div>
      </div>
    </Router>
  );
};

export default App;