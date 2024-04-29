import { Button } from "../..";
import { FilterType } from "../../../types";
import { filter } from "../../assets";

const Filter = ({ text, onClick }: FilterType) => {
  return (
    <div className="flex items-center justify-around w-[200px] h-[48px] rounded-[5px] bg-[#FFFFFF] xl:h-[56px]">
      <span className="text-[12px] font-normal leading-[20px] xl:text-[14px]">
        {text}
      </span>
      <Button
        className={"w-[10px] xl:w-[12px]"}
        onClick={onClick}
        src={filter}
      />
    </div>
  );
};

export default Filter;
