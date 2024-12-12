// src/Light.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function Light({ tlColor = "red", isActive, onClick, label }) {
  const [isBlinking, setIsBlinking] = useState(false);

  const handleClick = () => {
    setIsBlinking(true);
    onClick && onClick();
    setTimeout(() => setIsBlinking(false), 1000);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <motion.div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          margin: "5px",
          cursor: "pointer",
        }}
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isBlinking ? [1, 0.3, 1] : isActive ? 1 : 0.4,
          scale: isBlinking ? [1, 1.2, 1] : 1,
          backgroundColor: isBlinking
            ? `${tlColor}cc`
            : tlColor,
        }}
        transition={{ duration: 0.5, repeat: 2 }}
        onClick={handleClick}
      />
      {label && (
        <div style={{ color: isActive ? tlColor : "gray", fontWeight: "bold" }}>
          {label}
        </div>
      )}
    </div>
  );
}

Light.propTypes = {
  tlColor: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Light;
