import React from 'react'

export const InputField = ({
  label,
  id,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  accept,
  required,
}) => {
  const isFileInput = type === 'file'

  return (
    <div className="md:flex md:items-center mb-6">
      <label
        htmlFor={id}
        className="block text-gray-500 font-bold md:mb-0 pr-4 md:w-1/3"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="md:w-2/3">
        {isFileInput ? (
          <input
            id={id}
            type="file"
            accept={accept}
            className={`appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${
              error ? 'border-red-500' : 'border-gray-200'
            }`}
            onChange={onChange}
          />
        ) : (
          <>
            <input
              id={id}
              className={`appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${
                error ? 'border-red-500' : 'border-gray-200'
              }`}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </>
        )}
      </div>
    </div>
  )
}
