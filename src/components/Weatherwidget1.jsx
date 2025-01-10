import Search from "./Search";
export default function Weatherwidget({
  selectedCity,
  nightTemp,
  nightCondition,
  date,
}) {
  function getWeatherIcon(nightCondition) {
    const condition = nightCondition.toLowerCase();

    switch (true) {
      case condition.includes("rain"):
        return "NightRain.png";
      case condition.includes("cloudy"):
        return "Nightclouds.png";
      case condition.includes("wind"):
        return "NightWind.png";
      case condition.includes("snow"):
        return "NightSnow.png";
      case condition.includes("thunder"):
        return "NightThunder.png";
      case true:
        return "Moon.png";
    }
  }
  return (
    <div className="flex justify-between items-center flex-col w-[400px] h-[800px] relative z-10">
      <div className="absolute right-[-50px] bottom-[-20px]">
        <img src="moon.svg" alt="" className="w-[128px] h-[128px]" />
      </div>
      <div className="p-[40px] flex justify-around items-start flex-col w-[400px] h-[490px] backdrop-blur-md absolute top-0 z-10 bg-[#111827]/40 rounded-t-[50px]">
        <p className="text-[#9CA3AF]">{date}</p>
        <h1 className="font-bold text-[50px] relative text-white">
          {selectedCity}
          <img
            className="absolute top-0 right-[-40px]"
            src="localization_icon.svg"
            alt=""
          />
        </h1>
        <div className="self-center">
          <img
            className="w-[250px] h-[250px] my-auto"
            src={getWeatherIcon(nightCondition)}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-[400px] h-[310px] absolute bottom-0 z-10 bg-[#111827]/40 rounded-b-[50px] backdrop-blur-md">
        <p className="text-[#9CA3AF] text-[110px] font-bold bg-gradient-to-b from-black to-white text-transparent bg-clip-text mt-[-88px]">
          {nightTemp}&deg;
        </p>
        <p className="text-[#777CCE] font-bold">{nightCondition}</p>
        <div className="flex justify-between w-[318px] h-[40px] p-1.5 absolute z-10 bottom-8">
          <img src="Rectangle 9.svg" alt="" />
          <img src="localization_icon.svg" alt="" />
          <img src="Heart.svg" alt="" />
          <img src="User.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
