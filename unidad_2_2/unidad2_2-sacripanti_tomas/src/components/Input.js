import { useState } from "react";

const Input = ({ setTextArray, textArray }) => {
  const [textInput, setTextInput] = useState("");

  const handleInput = (e) => {
    setTextInput(e.target.value);
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (textInput === "") {
      console.log(
        "Agregue datos válidos, de otra manera no será posible agregarlos."
      );
    } else {
      setTextArray([...textArray, textInput]);
      setTextInput("");
    }
  };

  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="textInput"></label>
        <input
          type="text"
          value={textInput}
          id="textInput"
          namne="textInput"
          onChange={handleInput}
        />
      </div>
      <button onClick={handleButton}>Agregar texto</button>
    </form>
  );
};

export default Input;
