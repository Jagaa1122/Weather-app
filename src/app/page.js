"use client";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Circles from "@/components/Circles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-[100vw] h-[100vh] relative">
      <div className="absolute"></div>
      <Circles />
      <LeftSide />
      <RightSide />
      <div className="absolute"></div>
    </div>
  );
}
