import React from "react";
import PropTypes from "prop-types";

function StatsBar({ clickCounts }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <p>Статистика кольорів:</p>
      <p>Червоний - {clickCounts.red}</p>
      <p>Жовтий - {clickCounts.yellow}</p>
      <p>Зелений - {clickCounts.green}</p>
    </div>
  );
}

StatsBar.propTypes = {
  clickCounts: PropTypes.shape({
    red: PropTypes.number,
    yellow: PropTypes.number,
    green: PropTypes.number,
  }).isRequired,
};

export default StatsBar;
