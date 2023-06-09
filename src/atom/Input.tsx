import React from 'react';

type Props = {
  label: string;
  placeholder: string;
  classname?: string;
  [x: string]: any;
};
const InputComponent: React.FC<Props> = ({
  label,
  placeholder,
  classname = '',
  ...rest
}) => {
  return (
    <label className={`${classname}`}>
      <span className="pr-[10px]">{label}:</span>
      <input
        placeholder={placeholder}
        className="px-[8px] py-[6px] border rounded-4"
        {...rest}
      />
    </label>
  );
};

export default InputComponent;
