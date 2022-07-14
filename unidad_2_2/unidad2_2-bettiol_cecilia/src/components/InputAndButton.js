import React from "react";

const InputAndButton = ({ inputText, setInputText, array, setArray }) => {
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleAdd = () => {
    inputText !== ""
      ? setArray([...array, inputText])
      : console.log("Input vacío");
    setInputText("");
  };

  return (
    <div>
      <div>
        <input type="text" value={inputText} onChange={handleInputText} />
      </div>
      <div>
        <button onClick={handleAdd}>Agregar</button>
      </div>
    </div>
  );
};

export default InputAndButton;
