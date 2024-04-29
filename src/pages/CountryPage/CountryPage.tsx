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
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchCountryData();
  }, [name]);

  return (
    <div className="flex flex-col gap-[64px] xl:gap-[80px]">
      <Link
        to={"/"}
        className="w-[104px] py-[7px] px-[23px] text-[14px] leading-[20px] font-light xl:w=[136px] xl:py=[10px] xl:px=[35px] xl:text=[16px]"
      >
        ← Back
      </Link>
      <div>
        {country && (
          <div className="flex gap-[144px]">
            <img
              src={country.flags?.png || ""}
              alt={`${country.name.common} flag`}
              className="w-[560px] h-[483px]"
            />
            <div className="flex flex-col items-start gap-[23px]">
              <h1 className="text-[32px] font-extrabold">
                {country.name.common}
              </h1>
              <div className="flex flex-col items-start gap-[68px]">
                <div className="flex justify-between">
                  <div>
                    <p className="leading-[32px]">
                      Native name:{" "}
                      <small className="leading-[32px] font-light">
                        {country.name.nativeName
                          ? Object.values(country.name.nativeName)[0].official
                          : "N/A"}
                      </small>
                    </p>
                    <p className="leading-[32px]">
                      Population:{" "}
                      <small className="leading-[32px] font-light">
                        {country.population}
                      </small>
                    </p>
                    <p className="leading-[32px]">
                      Region:{" "}
                      <small className="leading-[32px] font-light">
                        {country.region}
                      </small>
                    </p>
                    <p className="leading-[32px]">
                      Sub Region:{" "}
                      <small className="leading-[32px] font-light">
                        {country.subregion || "N/A"}
                      </small>
                    </p>
                    <p className="leading-[32px]">
                      Capital:{" "}
                      <small className="leading-[32px] font-light">
                        {country.capital || "N/A"}
                      </small>
                    </p>
                  </div>
                  <div>
                    <p className="leading-[32px]">
                      Top Level Domain:{" "}
                      <small className="leading-[32px] font-light">
                        {country.tld.join(", ")}
                      </small>
                    </p>
                    <p className="leading-[32px]">
                      Currencies:{" "}
                      <small className="leading-[32px] font-light">
                        {country.currencies
                          ? Object.values(country.currencies)
                              .map((cur: any) => cur.name)
                              .join(", ")
                          : "N/A"}
                      </small>
                    </p>
                    <p className="leading-[32px]">
                      Languages:{" "}
                      <small className="leading-[32px] font-light">
                        {country.languages
                          ? Object.values(country.languages).join(", ")
                          : "N/A"}
                      </small>
                    </p>
                  </div>
                </div>
                <p className="leading-[24px]">
                  Border Countries:{" "}
                  <small className="leading-[32px] text-[14px]">
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
