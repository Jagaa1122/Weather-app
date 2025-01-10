import { useEffect, useState } from "react";

export default function Search({
  selectedCity,
  setSelectedCity,
  setDayTemp,
  setDayCondition,
  setNightTemp,
  setNightCondition,
  setDate,
}) {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) =>
      country.cities.map((city) => {
        return `${city}, ${country.country}`;
      })
    );
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }

  async function getWeather(city) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=ca0a05c2e6014802a0f21258250801&q=${city}`
    );
    const data = await result.json();

    setDayTemp(data.current.temp_c);
    setDayCondition(data.current.condition.text);
    setNightTemp(data.forecast.forecastday[0].hour[0].temp_c);
    setNightCondition(data.forecast.forecastday[0].hour[0].condition.text);
    setDate(data.current.last_updated);
  }

  useEffect(() => {
    getData();
    getWeather(selectedCity);
  }, []);

  const searchHandler = (e) => {
    const search = e.target.value;
    setInputValue(search);

    const filtered = cities.filter((city) => {
      if (!search) {
        return false;
      }
      return city.toLowerCase().includes(search.toLowerCase());
    });
    setSearched(filtered);
  };

  return (
    <div className="absolute top-[40px] z-30 ">
      <div className="relative ">
        <input
          type="text"
          value={inputValue}
          placeholder="Search"
          className=" rounded-[12px] w-[400px] h-[40px] pl-[35px] outline-none"
          onChange={searchHandler}
        />
        <img
          className="absolute left-[5px] top-[50%] translate-y-[-50%] w-[30px]"
          src="search.svg"
          alt=""
        />
      </div>
      <div className="rounded-[30px] overflow-hidden absolute top-[50px]">
        {searched.length > 0 &&
          searched.slice(0, 10).map((city, index) => (
            <p
              className="cursor-pointer bg-white font-bold p-2 flex text-[25px]"
              key={index}
              onClick={() => {
                setSelectedCity(city);
                setInputValue("");
                setSearched([]);
                getWeather(city);
              }}
            >
              <img src="localization_icon.svg" alt="" />
              {city}
            </p>
          ))}
      </div>
    </div>
  );
}
