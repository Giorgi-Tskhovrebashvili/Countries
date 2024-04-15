import { Link } from "react-router-dom";
import { Button } from "../..";
import { HeaderType } from "../../../types";

const Header = ({ onClick }: HeaderType) => {
  return (
    <div className="flex justify-between w-[375px] m-auto px-[16px] py-[30px] xl:w-[1440px] xl:px-[80px] xl:py-[23px]">
      <Link
        to={"/"}
        className="w-[135px] h-[20px] text-[14px] font-extrabold leading-[20px] xl:w-[235px] xl:h-[33px] xl:text-[24px] xl:leading-[normal]"
      >
        Where in the world?
      </Link>
      <Button
        className={
          "w-[60px] h-[16px] text-[12px] xl:w-[80px] xl:h-[22px] xl:text-[16px]"
        }
        onClick={onClick}
        children={"Dark Mode"}
      />
    </div>
  );
};

export default Header;
