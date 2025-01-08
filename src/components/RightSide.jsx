import Weatherwidget from "../components/Weatherwidget1";
export default function RightSide({
  selectedCity,
  nightTemp,
  setNightTemp,
  nightCondition,
  setNightCondition,
}) {
  return (
    <div className="nightWeather relative bg-[#0f141e] w-[50%] h-[100%] flex items-center justify-center">
      <Weatherwidget
        selectedCity={selectedCity}
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
      />
      <div className="absolute right-[165px] bottom-[100px]">
        <img src="moon.svg" alt="" className="w-[128px] h-[128px]" />
      </div>
    </div>
  );
}
