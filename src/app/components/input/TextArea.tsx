"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface TextAreaProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        className={`peer w-full p-4 pt-6 min-h-[150px] max-h-[150px] outline-none bg-white font-light border-[1px] rounded-md
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${errors[id] ? "border-rose-400" : "border-violet-300"}
        ${errors[id] ? "focus:border-rose-400" : "focus:border-violet-300"}
    `}
      />
      <label
        htmlFor={id}
        className={`absolute cursor-text text-md 
      duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4
      peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 
      peer-focus:scale-75 
      peer-focus:-translate-y-4 
      ${errors[id] ? "text-rose-400" : "text-violet-400"}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
