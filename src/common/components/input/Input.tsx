import { InputType } from "../../../types";

const Input = ({
  className,
  type,
  placeholder,
  onChange,
  value,
  name,
}: InputType) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default Input;
