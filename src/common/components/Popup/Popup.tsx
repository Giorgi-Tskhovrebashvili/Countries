import { Link } from "react-router-dom";

const Popup = () => {
  return (
    <div className="flex flex-col absolute top-[140px] truncate bg-white w-[200px] rounded-[5px] border-[1px] border-slate-950 h-[144px] px-[24px] py-[16px] gap-[8px] xl:h-[164px] xl:top-[60px] xl:right-[0]">
      <Link
        to={"/Africa"}
        className="text-[12px] font-semibold leading-[16px] xl:text-[14px] xl:leading-[20px]"
      >
        Africa
      </Link>
      <Link
        to={"/America"}
        className="text-[12px] font-semibold leading-[16px] xl:text-[14px] xl:leading-[20px]"
      >
        America
      </Link>
      <Link
        to={"/Asia"}
        className="text-[12px] font-semibold leading-[16px] xl:text-[14px] xl:leading-[20px]"
      >
        Asia
      </Link>
      <Link
        to={"/Europe"}
        className="text-[12px] font-semibold leading-[16px] xl:text-[14px] xl:leading-[20px]"
      >
        Europe
      </Link>
      <Link
        to={"/Oceania"}
        className="text-[12px] font-semibold leading-[16px] xl:text-[14px] xl:leading-[20px]"
      >
        Oceania
      </Link>
    </div>
  );
};

export default Popup;
