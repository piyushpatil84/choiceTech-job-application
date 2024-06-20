import React from 'react';

export const ProgressBar = ({ step, totalSteps }) => {
  const progressBarWidth = (step / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="h-2 bg-gray-300 rounded-lg">
        <div
          className="bg-indigo-600 h-full rounded-lg"
          style={{ width: `${progressBarWidth}%` }}
        />
      </div>
    </div>
  );
};
