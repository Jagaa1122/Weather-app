import { useState } from "react";

export default function Search() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");

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

  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);
    setSelectedCity("");
  };
  return (
    <div className="absolute top-[40px] z-30 ">
      <input
        type="text"
        value={selectedCity}
        className="border-2 border-grey rounded-[12px] w-[400px] h-[30px]"
        onChange={searchHandler}
      />
      {searched.length > 0 &&
        searched.slice(0, 10).map((city) => (
          <p key={city} onClick={() => setSelectedCity(city)}>
            {city}
          </p>
        ))}
    </div>
  );
}
