import React from 'react'
import { Button } from '../button'

export const NavigationButtons = ({
  step,
  totalSteps,
  showSuccess,
  prevStep,
  nextStep,
  handleStartOver,
  handleSubmit,
  isFormValid
}) => (
  <div className="mt-8 flex justify-end space-x-4">
    {step !== 1 && (
      <Button
        onClick={showSuccess ? handleStartOver : prevStep}
        label={showSuccess ? 'Start Over' : 'Previous'}
        bgColor="bg-gray-500"
        hoverColor="hover:bg-gray-600"
      />
    )}
    {step === totalSteps && !showSuccess && (
      <Button
        onClick={handleSubmit}
        label="Submit"
        bgColor="bg-indigo-600"
        hoverColor="hover:bg-indigo-700"
      />
    )}
  </div>
)
