import Weatherwidget from "../components/Weatherwidget";
import Search from "./Search";

export default function LeftSide({selectedCity, setSelectedCity}) {
  return (
    <div className="relative dayWeather bg-[#f3f4f6] w-[50%] h-[100%] flex items-center justify-center">
      <Search selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
      <Weatherwidget selectedCity={selectedCity} />
      <div className="absolute left-[125px] top-[80px]">
        <img src="sun.svg" alt="" className="w-[128px] h-[128px]" />
      </div>
    </div>
  );
}
