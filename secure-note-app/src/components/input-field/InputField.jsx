const InputField = ({
  label,
  id,
  type = "text",
  errors = {},
  register,
  required = false,
  message = "This field is required",
  className = "",
  min,
  value,
  autoFocus = false,
  placeholder = "",
  readOnly = false,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className='font-semibold text-md text-slate-800'>
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`px-3 py-2 border rounded-md outline-none text-slate-700 transition-colors duration-200
          ${errors[id]?.message ? "border-red-500" : "border-slate-700"}
          ${autoFocus ? "border-2" : ""}
          ${readOnly ? "bg-gray-100 cursor-not-allowed" : "bg-transparent"}
        `}
        autoFocus={autoFocus}
        readOnly={readOnly}
        defaultValue={value}
        {...register(id, {
          required: required ? { value: true, message } : false,
          minLength: min
            ? { value: min, message: "Minimum 6 characters required" }
            : undefined,
        })}
      />

      {errors[id]?.message && (
        <p className='text-sm font-semibold text-red-500 mt-0'>
          {errors[id]?.message}*
        </p>
      )}
    </div>
  );
};

export default InputField;
