import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const SInput: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} name={name} {...rest} />
    </div>
  );
};

export default SInput;
