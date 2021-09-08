import React from "react";

// Ejemplo children

const Welcome = ({ nombre, apellido }) => {
  return (
    <div>
      {nombre}
      {apellido}
    </div>
  );
};

// Puede ser un bienvenido usuario con
// props en home

export default Welcome;
