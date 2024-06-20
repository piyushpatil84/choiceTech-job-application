export const TextArea = ({
  label,
  id,
  name,
  rows,
  cols,
  value,
  onChange,
  onBlur,
  error,
  required,
}) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3 flex items-center">
        <label
          htmlFor={id}
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>
      <div className="md:w-2/3">
        <textarea
          id={id}
          name={name}
          rows={rows}
          cols={cols}
          className={`appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${
            error ? 'border-red-500' : 'border-gray-200'
          }`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
    </div>
  )
}
