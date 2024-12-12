import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  
  const error = useRouteError();
  return (
    <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
      <h1>Помилка!</h1>
      <p>Сторінку не знайдено або сталась інша помилка.</p>
      <p>{error?.statusText || error?.message}</p>
    </div>
  );
}

export default ErrorPage;
