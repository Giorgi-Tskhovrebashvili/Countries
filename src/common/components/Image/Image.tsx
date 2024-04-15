import { ImageType } from "../../../types";

const Image = ({ icon, className }: ImageType) => {
  return <img className={className} src={icon} alt="" />;
};

export default Image;
