import { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [array1, setArray] = useState([]);

  const handleInputText = (event) => {
    console.log(event.target.value);
    setInput1(event.target.value);
  };

  const updateArray = () => {
    input1 !== ""
      ? setArray([...array1, input1])
      : console.log("No se ingresó nada");
    setInput1(""); //vacio el campo de texto
  };

  return (
    <div className="App">
      <div>
        <label for="input1">Ingrese Texto: </label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={handleInputText}
        />
      </div>
      <div>
        <button onClick={updateArray}>Agregar</button>
      </div>
      <div>
        {array1.map((currentValue, index) => (
          <p key={index}>
            {/*para que no se rompa si es repite */}
            {Number(currentValue) ? (
              Number(currentValue % 2) === 0 ? (
                <p>
                  {Math.round(currentValue)} es par
                </p> /*redondeo los numero por enunciado*/
              ) : (
                <p>{Math.round(currentValue)} es impar</p>
              )
            ) : (
              <div>
                <input type="text" value={currentValue} />
              </div>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
