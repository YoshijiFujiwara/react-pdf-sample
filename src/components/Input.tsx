import React from "react";

export const Input = ({
  label,
  defaultValue,
  onChange,
}: {
  label: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <label>{label}</label>
      <input name={label} defaultValue={defaultValue} onChange={onChange} />
    </div>
  );
};
