import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CountriesType } from "../../types";

const CountryPage = () => {
  const [country, setCountry] = useState<CountriesType[]>([]);
  const { name } = useParams();

  useEffect(() => {
    const getData = async (name: any) => {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
      console.log("API Response:", response.data);
      const data = response.data;
      setCountry(data);
    };
    console.log("Country name parameter:", name);
    getData(name);
  }, [name]);

  return (
    <div className="flex flex-col gap-[64px]  xl:gap-[80px]">
      <Link
        to={"/"}
        className="w-[104px] py-[7px] px-[23px] text-[14px] leading-[20px] font-light xl:w-[136px] xl:py-[10px] xl:px-[35px] xl:text-[16px]"
      >
        {" "}
        ← Back
      </Link>
      <div>
        {country.length > 0 &&
          country.map((country) => {
            return (
              <div key={country.name.common} className="flex gap-[144px]">
                <img
                  src={country.flags.png}
                  alt="flag"
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
                          Native name: {""}
                          <small className="leading-[32px] font-light">
                            {country.name.official}
                          </small>
                        </p>
                        <p className="leading-[32px]">
                          Population: {""}
                          <small className="leading-[32px] font-light">
                            {country.population}
                          </small>
                        </p>
                        <p className="leading-[32px]">
                          Region: {""}
                          <small className="leading-[32px] font-light">
                            {country.region}
                          </small>
                        </p>
                        <p className="leading-[32px]">
                          Sub Region: {""}
                          <small className="leading-[32px] font-light">
                            {country.subregion}
                          </small>
                        </p>
                        <p className="leading-[32px]">
                          Capital: {""}
                          <small className="leading-[32px] font-light">
                            {country.capital}
                          </small>
                        </p>
                      </div>
                      <div>
                        <p className="leading-[32px]">
                          Top Level Domain: {""}
                          <small className="leading-[32px] font-light">
                            {country.tld}
                          </small>
                        </p>
                        <p className="leading-[32px]">
                          Currencies: {""}
                          <small className="leading-[32px] font-light">
                            {country.currencies}
                          </small>
                        </p>
                        <p className="leading-[32px]">
                          Languages: {""}
                          <small className="leading-[32px] font-light">
                            {country.languages}
                          </small>
                        </p>
                      </div>
                    </div>
                    <p className="leading-[24px]">
                      Border Countries: {""}
                      <small className="leading-[32px] text-[14px]">
                        {country.borders}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CountryPage;
