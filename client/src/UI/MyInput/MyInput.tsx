import React from "react";

interface IMyInputProps {
  className?: string;
  id?: string;
  placeholder: string;
  register?: any;
  settings?: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}

export const MyInput: React.FC<IMyInputProps> = ({
  className,
  id,
  placeholder,
  register,
  settings,
}) => {
  return (
    <input
      autoComplete="off"
      type="text"
      id={id}
      {...register(`${id}`, settings)}
      className={className}
      placeholder={placeholder}
    />
  );
};
