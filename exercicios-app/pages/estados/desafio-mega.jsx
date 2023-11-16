import { useState } from "react";
import RandomNumbers from "../../components/random-numbers.jsx/random-numbers";

export default function MegaSena() {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "42px",
    gap: "4rem",
    height: "100vh",
  };

  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(6);

  function gerarNumeros() {
    setArr([]);
    for (let i = 0; i < count; i++) {
      let num = Math.floor(Math.random() * 60 + 1);
      setArr((arr) => [...arr, num]);
    }
  }

  return (
    <div style={style}>
      <h1 style={{ fontSize: "52px", margin: "0" }}>Numeros da Mega Sena</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {arr.map((arr) => {
          return <RandomNumbers num={arr} />;
        })}
      </div>
      <div>
        <input
          onChange={(e) => setCount(e.target.value)}
          placeholder="Qnts numeros?"/>
        <button onClick={gerarNumeros}>Gerar numeros</button>
      </div>
    </div>
  );
}
