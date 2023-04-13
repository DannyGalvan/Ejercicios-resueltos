import React, { useState } from "react";

const random = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

const changeRgb = () => {
  const color = {
    red: random(0, 255),
    green: random(0, 255),
    blue: random(0, 255),
  };

  return `rgb(${color.red},${color.green},${color.blue})`;
};

export const Square = () => {
  const [color, setColor] = useState("black");
  const [timer, setTimer] = useState(null);

  const startColorChanging = () => {
    const intervalId = setInterval(() => setColor(changeRgb()), 100); // Cambia de color cada (100ms)
    setTimer(intervalId);
  };

  const stopColorChanging = () => {
    clearInterval(timer);
    setInterval(null);
  };

  const enterMouse = () => {
    startColorChanging();
  };

  const leaveMouse = () => {
    stopColorChanging();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <article className="position-absolute fw-bold text-center" style={{ top: 20 }}>
        <h2>
          Entra al Recuadro para que cambie de color
        </h2>
        <h2>
          Sal para que deje de cambiar
        </h2>
        <h2>
          Doble Click dentro para que deje de cambiar
        </h2>
      </article>
      <div
        style={{ width: 255, height: 255, backgroundColor: color }}
        onMouseEnter={enterMouse}
        onMouseLeave={leaveMouse}
        onDoubleClick={leaveMouse}
      ></div>
    </div>
  );
};
