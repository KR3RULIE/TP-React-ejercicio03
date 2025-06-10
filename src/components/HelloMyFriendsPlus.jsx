import { useState } from "react";

const HelloMyFriendsPlus = ({ saludo }) => {
  const [mensaje, setMensaje] = useState("");
  const imprimir = () => {
    setMensaje(mensaje + "(from changed state)!");
  };

  return (
    <div>
      <h2>
        Hola {saludo} {mensaje}
      </h2>
      <button className="btn btn-outline-primary" onClick={imprimir}>
        Usar state
      </button>
    </div>
  );
};

export default HelloMyFriendsPlus;
