// src/TrafficLights.js
import React, { useState, useEffect } from "react";
import Light from "./Light";
import StatsBar from "./StatsBar";
import PedestrianTrafficLight from "./PedestrianTrafficLight";

function TrafficLights({ initialOrientation = "vertical" }) {
  const [clickCounts, setClickCounts] = useState({ red: 0, yellow: 0, green: 0 });
  const [vehicleLight, setVehicleLight] = useState("red");
  const [pedestrianControl, setPedestrianControl] = useState(false);

  useEffect(() => {
    const lightCycle = ["red", "yellow", "green", "yellow"];
    let index = 0;
    const interval = setInterval(() => {
      setVehicleLight(lightCycle[index]);
      setClickCounts((prevCounts) => ({
        ...prevCounts,
        [lightCycle[index]]: prevCounts[lightCycle[index]] + 1,
      }));
      index = (index + 1) % lightCycle.length;
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const containerStyles = {
    display: "flex",
    flexDirection: initialOrientation === "vertical" ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    border: "2px solid black",
    borderRadius: "10%",
    background: "#000000",
    width: initialOrientation === "vertical" ? "70px" : "auto",
    height: initialOrientation === "horizontal" ? "70px" : "auto",
  };

  const wrapperStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    minWidth: "100vw",
    flexDirection: "column",
    textAlign: "center",
    gap: "20px",
  };

  return (
    <div style={wrapperStyles}>
      <h1>Автомобільний світлофор</h1>
      <div style={containerStyles}>
        <Light tlColor="red" isActive={vehicleLight === "red"} label="Стоп" />
        <Light tlColor="yellow" isActive={vehicleLight === "yellow"} label="Чекай" />
        <Light tlColor="green" isActive={vehicleLight === "green"} label="Їдь" />
      </div>
      <StatsBar clickCounts={clickCounts} />
      <h1>Пішохідний світлофор</h1>
      <PedestrianTrafficLight
        vehicleLight={vehicleLight}
        onManualOverride={() => setPedestrianControl(true)}
        manualControl={pedestrianControl}
      />
    </div>
  );
}

export default TrafficLights;
