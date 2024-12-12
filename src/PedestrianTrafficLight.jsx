import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Light from "./Light"; 

function PedestrianTrafficLight({ vehicleLight, manualControl, onManualOverride }) {
  const [pedestrianLight, setPedestrianLight] = useState("walk");
  const [isManual, setIsManual] = useState(false);

 
  useEffect(() => {
    if (!isManual) {
      const interval = setInterval(() => {
        setPedestrianLight((prevLight) => (prevLight === "wait" ? "walk" : "wait"));
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isManual]);

  useEffect(() => {
    if (vehicleLight === "green" || vehicleLight === "yellow") {
      setPedestrianLight("wait");
    }
  }, [vehicleLight]);

  const handleManualControl = () => {
    if (vehicleLight === "red") {
      setPedestrianLight((prevLight) => (prevLight === "wait" ? "walk" : "wait"));
      setIsManual(true);
      onManualOverride();
    }
  };

  
  useEffect(() => {
    if (manualControl === false) {
      setIsManual(false);
    }
  }, [manualControl]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "2px solid black",borderRadius: "10%",
        background: "#000000", height: "125px", width: "60px"}}>
      <Light tlColor="red" isActive={pedestrianLight === "wait"} />
      <Light tlColor="green" isActive={pedestrianLight === "walk"} />
      <button
        onClick={handleManualControl}
        disabled={vehicleLight !== "red"}
        style={{ marginTop: "10px", padding: "5px 10px" }}
      >
        {pedestrianLight === "wait" ? "Перемикання світлофору" : "Перемикання світлофору"}
      </button>
      
    </div>
  );
}

PedestrianTrafficLight.propTypes = {
  vehicleLight: PropTypes.string.isRequired,
  manualControl: PropTypes.bool,
  onManualOverride: PropTypes.func.isRequired,
};

export default PedestrianTrafficLight;
