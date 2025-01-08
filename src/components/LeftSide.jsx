import Weatherwidget from "../components/Weatherwidget";
import Search from "./Search";

export default function LeftSide({
  selectedCity,
  setSelectedCity,
  dayTemp,
  setDayTemp,
  dayCondition,
  setDayCondition,
  nightTemp,
  setNightTemp,
  nightCondition,
  setNightCondition,
}) {
  return (
    <div className="relative dayWeather bg-[#f3f4f6] w-[50%] h-[100%] flex items-center justify-center">
      <Search
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        dayTemp={dayTemp}
        setDayTemp={setDayTemp}
        dayCondition={dayCondition}
        setDayCondition={setDayCondition}
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
      />
      <Weatherwidget
        selectedCity={selectedCity}
        dayTemp={dayTemp}
        setDayTemp={setDayTemp}
        dayCondition={dayCondition}
        setDayCondition={setDayCondition}
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
      />
      <div className="absolute left-[125px] top-[80px]">
        <img src="sun.svg" alt="" className="w-[128px] h-[128px]" />
      </div>
    </div>
  );
}
