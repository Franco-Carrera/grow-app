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

export default Welcome;
