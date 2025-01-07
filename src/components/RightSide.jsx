import Weatherwidget from "../components/Weatherwidget1";
export default function RightSide() {
  return (
    <div className="nightWeather relative bg-[#0f141e] w-[50%] h-[100%] flex items-center justify-center">
      <Weatherwidget />
      <div className="absolute right-[165px] bottom-[100px]">
        <img src="moon.svg" alt="" className="w-[85px] h-[85px]" />
      </div>
    </div>
  );
}
