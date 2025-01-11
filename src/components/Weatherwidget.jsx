export default function Weatherwidget({
  selectedCity,
  dayTemp,
  dayCondition,
  date,
  loading
}) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = date.toLocaleDateString('en-US', options);

    // Add ordinal suffix
    const day = date.getDate();
    const suffix = (day % 10 === 1 && day !== 11) ? "st" :
                   (day % 10 === 2 && day !== 12) ? "nd" :
                   (day % 10 === 3 && day !== 13) ? "rd" : "th";

    return formattedDate.replace(/\d+/, `${day}${suffix}`);
}
  function getWeatherIcon(dayCondition) {
    const condition = dayCondition.toLowerCase();

    switch (true) {
      case condition.includes("sun"):
        return "Sun.png";
      case condition.includes("rain"):
        return "Rain.png";
      case condition.includes("cloudy"):
        return "Clouds.png";
      case condition.includes("wind"):
        return "Wind.png";
      case condition.includes("snow"):
        return "Snow.png";
      case condition.includes("thunder"):
        return "Thunder.png";
      case true:
        return "Sun.png";
    }
  }
  
  if (loading){
    return (
      <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><circle cx="25" cy="25" r="20" fill="none" stroke="#cccccc" strokeWidth="2" /><circle cx="25" cy="25" r="20" fill="none" stroke="#808080" strokeWidth="5" strokeDasharray="60 120"><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite" /></circle></svg>

    );
    } else {

  return (
   
    
    <div className="flex justify-between items-center flex-col w-[400px] h-[800px] relative z-10 ">
      <div className="absolute left-[-50px] top-[-20px]">
        <img src="sun.svg" alt="" className="w-[128px] h-[128px]" />
      </div>
      <div className="p-[40px] flex justify-around items-start flex-col w-[400px] h-[490px] backdrop-blur-md absolute top-0 z-10 bg-[#ffffff]/40 rounded-t-[50px]">
        <p className="text-[#9CA3AF]">{formatDate(date)}</p>
        <h1 className="font-bold text-[50px] relative text-black">
          {selectedCity.split(",")[0]}
          <img
            className="absolute top-0 right-[-40px]"
            src="localization_icon.svg"
            alt=""
          />
        </h1>
        <div className="self-center">
          <img
            className="w-[250px] h-[250px] my-auto"
            src={getWeatherIcon(dayCondition)}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-[400px] h-[310px] absolute bottom-0 z-10 bg-[#ffffff]/40 rounded-b-[50px] backdrop-blur-md ">
        <p className="text-[#9CA3AF] text-[110px] font-bold bg-gradient-to-b from-black to-white text-transparent bg-clip-text mt-[-88px]">
          {dayTemp}&deg;
        </p>
        <p className="text-[#FF8E27] font-bold mb-1">{dayCondition}</p>
        <div className="flex justify-between w-[318px] h-[40px] p-1.5 absolute z-10 bottom-8">
          <img src="Rectangle 9.svg" alt="" />
          <img src="home.svg" alt="" />
          <img src="Heart.svg" alt="" />
          <img src="User.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
}