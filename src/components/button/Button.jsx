import React from 'react'

export const Button = ({
  onClick,
  type = 'button',
  label,
  bgColor = 'bg-purple-500',
  hoverColor = 'hover:bg-purple-400',
  mlAuto = false,
  icon,
}) => {
  const marginLeft = mlAuto ? 'ml-auto' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      className={`shadow ${bgColor} ${hoverColor} focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-28 ${marginLeft} ${
        icon && 'flex justify-center items-center'
      }`}
    >
      {label === 'Prev' && icon}
      {label}
      {label === 'Next' && icon}
    </button>
  )
}
