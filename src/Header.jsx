import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "10px",
      background: "#eee",
      position: "fixed",  
      top: "0",
      width: "100%",
      zIndex: "1000",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)"
    }}>
      <Link to="/horizontal">Горизонтальний світлофор</Link>
      <Link to="/vertical">Вертикальний світлофор</Link>
    </nav>
  );
}

export default Header;
