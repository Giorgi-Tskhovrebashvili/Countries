import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CountriesType } from "../../types";

const CountryPage = () => {
  const [country, setCountry] = useState<CountriesType[]>([]);
  const { name } = useParams();

  useEffect(() => {
    const getData = async (name: any) => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = response.data;
        setCountry(data);
      } catch {
        console.error("Error fetching country data:");
      }
    };
    getData(name);
  }, [name]);

  return (
    <div>
      <Link to={"/"}>Back</Link>
      <div>
        {country.length > 0 &&
          country.map((country) => {
            return (
              <div key={country.name.common}>
                <h1>{country.name.common}</h1>
                <img src={country.flags.png} alt="flag" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CountryPage;
