import Weatherwidget from "../components/Weatherwidget";
export default function LeftSide() {
  return <div className="relative dayWeather bg-[#f3f4f6] w-[50%] h-[100%] flex items-center justify-center">
    <Weatherwidget/>
    <div className="absolute left-[65px] top-[85px]">
      <img src="sun.svg" alt="" className="w-[85px] h-[85px]" />
    </div>
  </div>;
}
