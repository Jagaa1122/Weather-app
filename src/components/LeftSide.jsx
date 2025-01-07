import Weatherwidget from "../components/Weatherwidget";
import Search from "./Search";
import { useState } from "react";
export default function LeftSide() {
  return (
    <div className="relative dayWeather bg-[#f3f4f6] w-[50%] h-[100%] flex items-center justify-center">
      <Search />
      <Weatherwidget />
      <div className="absolute left-[165px] top-[100px]">
        <img src="sun.svg" alt="" className="w-[85px] h-[85px]" />
      </div>
    </div>
  );
}
