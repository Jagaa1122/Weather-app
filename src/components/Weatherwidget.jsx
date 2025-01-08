export default function Weatherwidget({
  selectedCity,
  dayTemp,
  setDayTemp,
  dayCondition,
  setDayCondition,
}) {
  return (
    <div className="flex justify-between items-center flex-col w-[400px] h-[700px] relative z-10 overflow-hidden">
      <div className="p-[40px] w-[400px]  backdrop-blur-lg absolute top-0 z-10 bg-[#ffffff]/40 rounded-[50px] mt-[50px]">
        <p className="">January 7, 2025</p>
        <h1 className="font-bold text-[50px] relative">
          {selectedCity}
          <img
            className="absolute top-0 right-0"
            src="localization_icon.svg"
            alt=""
          />
        </h1>

        <img className="w-[250px] h-[250px] mx-auto" src="Sun.png" alt="" />

        <div className="">
          <p>{dayTemp}</p>
          <p>{dayCondition}</p>
        </div>
      </div>
    </div>
  );
}
