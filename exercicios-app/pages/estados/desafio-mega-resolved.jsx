import { useEffect, useState } from "react";
import NumerosMega from "../../components/random-numbers.jsx/random-numbers-solved";
import { mega } from "../functions/mega/desafio-mega";

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

  /* Gerar um estado inicial com o input valor 6 */
  /* Gerar um estado inicial com o valor a função mega */
  /* Como parametro passar o contador para a função mega */

  const [contador, setContador] = useState(6);
  const [numeros, setNumeros] = useState([]);


  /* Utilizando o useEffect para resolver Text content did not match, passando o estado inicial de numeros
  com um array vazio, porem inicializando a função através do useEffect ou apenas o array vazio já resolve */

  useEffect(() => {
    setNumeros(mega())
  }, [])

  /* Função para mapear o array e renderizar o array com o componente jsx, passando a chave e o numero */

  function renderizarNumeros() {
    return numeros.map((n) => <NumerosMega key={n} numero={n} />);
  }

  /* chamar a função de renderização no html, adicionando input com valor inicial contador
  utilizar o evento onChange e para pegar o valor do input, e ao final um botão 
  on ao clicar, passar a função mega para o novo estado de numeros como argumento o novo estado do contador */

  return (
    <div style={style}>
      <h1 style={{ fontSize: "52px", margin: "0" }}>Numeros da Mega Sena</h1>
      <div style={{ display: "flex", gap: "10px" }}>{renderizarNumeros()}</div>
      <div>
        <input
          type="number"
          min={6}
          max={20}
          value={contador}
          onChange={(e) => setContador(e.target.value)}
          placeholder="Qnts numeros?"
        />
        <button onClick={() => setNumeros(mega(contador))}>
          Gerar numeros
        </button>
      </div>
    </div>
  );
}
