import { useState } from "react";

export default function Contador() {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "42px",
    height: "100vh",
    gap: "40px",
  };

  const [contador, setContador] = useState(0);

  function incremento() {
    setContador(contador + 1);
  }

  function decremento() {
    if (contador == 0) {
      return 0;
    }
    setContador(contador - 1);
  }

  return (
    <div style={style}>
      <h1>Contador {contador}</h1>
      <button type="button" onClick={incremento}>+</button>
      <button type="button" onClick={decremento}>-</button>
    </div>
  );
}
