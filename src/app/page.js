"use client";
import { useState } from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Circles from "@/components/Circles";
import Image from "next/image";
import styles from "@/app/styles.css";
import Search from "@/components/Search";






export default function Home() {
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  return (
    <div className="flex w-[100vw] h-[100vh] relative overflow-hidden">
      <LeftSide selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
      <RightSide selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <Circles />
    </div>
  );
}
