import { InputType } from "../../../types";

const Input = ({
  className,
  type,
  placeholder,
  onChange,
  value,
}: InputType) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
