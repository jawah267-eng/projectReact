import React from 'react'

interface InputFieldProps {
    name: string;
    value: string;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: React.HTMLInputTypeAttribute;
}
const InputField = ({ name, value, onChange, type = 'text' }: InputFieldProps) => {
  const fieldName = name.toLowerCase();

  return (
    <div key={name} className="input-field">
      <label>{name}</label>
      <input name={fieldName} type={type} value={value} onChange={onChange} />
    </div>
  )
}

export default InputField;
