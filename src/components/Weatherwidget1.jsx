import Search from "./Search";
export default function Weatherwidget({ selectedCity }) {
  return (
    <div className="flex justify-between items-center flex-col w-[400px] h-[700px] relative z-10 overflow-hidden">
      <div className="flex justify-around items-start flex-col w-[400px] h-[490px] backdrop-blur-md absolute top-0 z-10 bg-[#111827]/40 rounded-t-[50px]">
      
        <p>January 7, 2025</p>
        <h1>{selectedCity}</h1>
        <div className="self-center">
          <img className="w-[250px] h-[250px] " src="Moon.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-[400px] h-[210px] absolute bottom-0 z-10 bg-[#111827]/40 rounded-b-[50px] backdrop-blur-md"></div>
    </div>
  );
}
