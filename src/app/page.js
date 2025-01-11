"use client";
import { useState } from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Circles from "@/components/Circles";
import Image from "next/image";
import styles from "@/app/styles.css";
import Search from "@/components/Search";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("Ulan Bator");
  const [dayTemp, setDayTemp] = useState("");
  const [dayCondition, setDayCondition] = useState("");
  const [nightTemp, setNightTemp] = useState("");
  const [nightCondition, setNightCondition] = useState("");
  const [date, setDate] = useState("");
  const [loading,setLoading] = useState(false);
 
  return (
    <div className="flex w-[100vw] h-[100vh] relative overflow-hidden">
      <LeftSide
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        dayTemp={dayTemp}
        setDayTemp={setDayTemp}
        dayCondition={dayCondition}
        setDayCondition={setDayCondition}
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
        date={date}
        setDate={setDate}
        loading={loading}
        setLoading={setLoading}
      />
      <RightSide
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        nightTemp={nightTemp}
        setNightTemp={setNightTemp}
        nightCondition={nightCondition}
        setNightCondition={setNightCondition}
        date={date}
        setDate={setDate}
        loading={loading}
        setLoading={setLoading}
      />
      <Circles />
    </div>
  );
}
