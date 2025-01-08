import Weatherwidget from "../components/Weatherwidget1";
export default function RightSide({
  selectedCity,
  nightTemp,
  setNightTemp,
  nightCondition,
  setNightCondition,
  date,
  setDate,
}) {
  return (
    <div className="nightWeather relative bg-[#0f141e] w-[50%] h-[100%] flex items-center justify-center">
      <Weatherwidget
        selectedCity={selectedCity}
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
        date={date}
        setDate={setDate}
      />
     
    </div>
  );
}
