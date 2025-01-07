import { useEffect, useState } from "react";

export default function Search({ selectedCity, setSelectedCity }) {

  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function getData() {
      const result = await fetch("https://countriesnow.space/api/v0.1/countries");
      const data = await result.json();
      let incomeCities = data.data.map((country) => {
        return country.cities;
      });
      incomeCities = incomeCities.flat();
      setCities(incomeCities);
    }

    getData();
  }, []);

  const searchHandler = (e) => {
    const search = e.target.value;
    setInputValue(search);
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);

  };
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setInputValue("");
    setSearched([]);
  };
  return (
    <div className="absolute top-[40px] z-30 ">
     <div className="relative "> <input
        type="text"
        value={inputValue}
        placeholder="Search"
        className="border-2 border-grey rounded-[12px] w-[400px] h-[40px] pl-[35px]"
        onChange={searchHandler}
      />
      <img className="absolute left-[5px] top-[50%] translate-y-[-50%] w-[30px]" src="search.svg" alt="" />
      </div>
      {searched.length > 0 &&
        searched.slice(0, 10).map((city) => (
          <p className="cursor-pointer bg-white font-bold" key={city} onClick={() => handleCitySelect(city)} >{city}</p>
        ))}
        
    </div>
  );
}
