import { Filter, Popup, SearchBox } from "../../common";
import axios from "axios";
import { useEffect, useState } from "react";
import { CountriesType } from "../../types";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const handlePopup = () => setShow(!show);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      setCountries(data);
    };
    getData();
  }, []);

  console.log("countries details", countries);

  const filteredCountries = countries
    .filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      return a.name.common.localeCompare(b.name.common);
    });

  return (
    <div className="w-[375px] flex flex-col items-center m-auto px-[16px] py-[24px] gap-[32px] xl:w-[100%] xl:px-[80px] xl:py-[48px] xl:gap-[48px]">
      <div className="flex flex-col gap-[40px] relative xl:flex-row xl:gap-[600px]">
        <SearchBox onChange={(e) => setSearch(e.target.value)} />
        <Filter text={"Filter by Region"} onClick={handlePopup} />
        {show && <Popup />}
      </div>
      <div className="grid grid-cols-1 justify-items-center	gap-[40px] xl:grid-cols-4 xl:gap-[75px]">
        {filteredCountries.map((country) => {
          return (
            <Link
              to={`/Country-Page/${country.name.common}`}
              key={country.name.common}
              className="w-[264px] h-[336px] flex flex-col gap-[12px] rounded-[5px] bg-[#FFFFFF]"
            >
              <img
                className="w-[267px] h-[160px]"
                src={country.flags.png}
                alt=""
              />
              <div className="flex flex-col gap-[16px] px-[24px]">
                <h1 className="text-[18px] font-extrabold leadin-[26px]">
                  {country.name.common}
                </h1>
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[14px] leading-[16px]">
                    Population:{" "}
                    <small className="text-[14px] font-light leading-[16px]">
                      {country.population}
                    </small>
                  </p>
                  <p className="text-[14px] leading-[16px]">
                    Region:{" "}
                    <small className="text-[14px] font-light leading-[16px]">
                      {country.region}
                    </small>
                  </p>
                  <p className="text-[14px] leading-[16px]">
                    Capital:{" "}
                    <small className="text-[14px] font-light leading-[16px]">
                      {country.capital}
                    </small>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
