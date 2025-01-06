"use client";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Circles from "@/components/Circles";
import Image from "next/image";
import styles from "@/app/styles.css"


export default function Home() {
  return (
    <div className="flex w-[800px] h-[600px] relative mx-auto mt-[50px] rounded-[25px] overflow-hidden relative">


      <LeftSide />
      <RightSide />
      <Circles />

    </div>
  );
}
