import React, { useEffect, useState } from "react";

const initialState = {
  // Se genera una fecha como estado inicial del componente
  fecha: new Date(),
  edad: 0,
  nombre: "Martín",
  apellidos: "San José",
};

const ClockFunctional = () => {
     // Estado privado del component
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setState((prevState) => {
      let edad = prevState.edad + 1;
      console.log("componente tipo funcion");
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  };

  return (
    <div>
      <h1>Componente funcional</h1>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default ClockFunctional;
