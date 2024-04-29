import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CountriesType } from "../../types";

const CountryPage = () => {
  const [country, setCountry] = useState<CountriesType | null>(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = response.data;

        if (data && data.length > 0) {
          setCountry(data[0]);
        } else {
          console.error(`No data found for country name: ${name}`);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, [name]);

  return (
    <div className="flex flex-col m-auto gap-[64px] px-[28px] py-[40px] w-[375px] xl:w-[100%] xl:px-[80px] xl:py-[80px] xl:gap-[80px]">
      <Link
        to={"/"}
        className="w-[104px] py-[7px] px-[23px] text-[14px] leading-[20px] font-light shadow-2xl rounded-md xl:w=[136px] xl:py=[10px] xl:px=[35px] xl:text=[16px]"
      >
        ← Back
      </Link>
      <div>
        {country && (
          <div className="flex flex-col gap-[20px] xl:gap-[144px] xl:flex-row">
            <img
              src={country.flags?.png || ""}
              alt={`${country.name.common} flag`}
              className="w-[320px] h-[276px] xl:w-[560px] xl:h-[483px]"
            />
            <div className="flex flex-col items-start gap-[23px]">
              <h1 className="text-[22px] font-extrabold xl:text-[32px]">
                {country.name.common}
              </h1>
              <div className="flex flex-col items-start gap-[68px] xl:w-[574px] xl:h-[323px]">
                <div className="flex flex-col gap-[32px] xl:flex-row xl:gap-[114px]">
                  <div>
                    <p className="leading-[32px] text-[14px] xl:text-[16px]">
                      Native name:{" "}
                      <small className="leading-[32px] font-light text-[14px] xl:text-[16px]">
                        {country.name.nativeName
                          ? Object.values(country.name.nativeName)[0].official
                          : "N/A"}
                      </small>
                    </p>
                    <p className="leading-[32px] text-[14px] xl:text-[16px]">
                      Population:{" "}
                      <small className="leading-[32px] font-light text-[14px] xl:text-[16px]">
                        {country.population}
                      </small>
                    </p>
                    <p className="leading-[32px] text-[14px] xl:text-[16px]">
                      Region:{" "}
                      <small className="leading-[32px] font-light text-[14px] xl:text-[16px]">
                        {country.region}
                      </small>
                    </p>
                    <p className="leading-[32px] text-[14px] xl:text-[16px]">
                      Sub Region:{" "}
                      <small className="leading-[32px] font-light text-[14px] xl:text-[16px]">
                        {country.subregion || "N/A"}
                      </small>
                    </p>
                    <p className="leading-[32px] text-[14px] xl:text-[16px]">
                      Capital:{" "}
                      <small className="leading-[32px] font-light text-[14px] xl:text-[16px]">
                        {country.capital || "N/A"}
                      </small>
                    </p>
                  </div>
                  <div>
                    <p className="leading-[32px] text-[14px] xl:text-[16px]">
                      Top Level Domain:{" "}
                      <small className="leading-[32px] font-light text-[14px] xl:text-[16px]">
                        {country.tld.join(", ")}
                      </small>
                    </p>
                    <p className="leading-[32px] text-[14px] xl:text-[16px]">
                      Currencies:{" "}
                      <small className="leading-[32px] font-light text-[14px] xl:text-[16px]">
                        {country.currencies
                          ? Object.values(country.currencies)
                              .map((cur: any) => cur.name)
                              .join(", ")
                          : "N/A"}
                      </small>
                    </p>
                    <p className="leading-[32px] text-[14px] xl:text-[16px]">
                      Languages:{" "}
                      <small className="leading-[32px] font-light text-[14px] xl:text-[16px]">
                        {country.languages
                          ? Object.values(country.languages).join(", ")
                          : "N/A"}
                      </small>
                    </p>
                  </div>
                </div>
                <p className="leading-[24px] flex flex-col xl:flex-row xl:gap-[10px] xl:items-center">
                  Border Countries:{" "}
                  <small className="text-[12px] font-light xl:text-[14px] flex">
                    {country.borders ? country.borders.join(", ") : "N/A"}
                  </small>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryPage;
