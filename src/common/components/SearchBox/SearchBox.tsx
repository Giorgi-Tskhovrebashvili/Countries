import { Image, Input } from "../..";
import { SearchBoxType } from "../../../types";
import { search } from "../../assets";

const SearchBox = ({ onChange }: SearchBoxType) => {
  return (
    <div className="flex w-[343px] h-[48px] px-[32px] py-[14px] gap-[26px] rounded-[5px] border-[1px] border-slate-950 xl:w-[480px] xl:h-[56px] xl:py-[18px]">
      <Image icon={search} className={"w-[16px] xl:w-[18px]"} />
      <Input
        className={
          "text-[12px] font-normal leading-[20px] px-[10px] w-[140px] h-[20px] xl:text-[14px] xl:px-[15px] xl:w-[200px]"
        }
        type={"search"}
        placeholder={"Search for a country…"}
        onChange={onChange}
        name={"searchBox"}
      />
    </div>
  );
};

export default SearchBox;
