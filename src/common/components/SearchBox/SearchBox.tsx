import { Image, Input } from "../..";
import { search } from "../../assets";

const SearchBox = () => {
  return (
    <div className="flex w-[343px] h-[48px] px-[32px] py-[14px] gap-[26px] rounded-[5px] border-[1px] border-slate-950 xl:w-[480px] xl:h-[56px] xl:py-[18px]">
      <Image icon={search} className={"w-[16px] xl:w-[18px]"} />
      <Input
        className={"text-[12px] font-normal leading-[20px] xl:text-[14px]"}
        type={"search"}
        placeholder={"Search for a country…"}
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        value={""}
      />
    </div>
  );
};

export default SearchBox;
