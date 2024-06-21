import React from 'react'

export const SuccessMessage = () => (
  <div className="flex items-center justify-center h-80">
  <div className="p-4 rounded shadow-lg ring ring-indigo-600/50">
    <div className="flex flex-col items-center space-y-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h1 className="text-4xl font-bold">Thank You!</h1>
      <p>Thank you for your interest, Application submitted successfully!.</p>
    </div>
  </div>
</div>
)
