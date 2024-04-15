import { Image } from "../..";
import { ButtonType } from "../../../types";

const Button = ({ className, onClick, children, src }: ButtonType) => {
  return (
    <button className={className} onClick={onClick}>
      {children} <Image icon={src} />
    </button>
  );
};

export default Button;
