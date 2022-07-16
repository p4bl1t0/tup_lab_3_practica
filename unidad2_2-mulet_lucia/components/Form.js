const Form = ({ textInput, setTextInput, setTextArray, textArray }) => {
  const inputHandler = (event) => {
    setTextInput(event.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    if (textInput === "") {
      console.log("Ingresar datos validos");
      return;
    }
    setTextArray([...textArray, textInput]);
    setTextInput("");
  };

  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="textInput"></label>
        <input
          type="text"
          value={textInput}
          id="textInput"
          name="textInput"
          onChange={inputHandler}
        />
      </div>
      <button onClick={buttonHandler}>Agregar texto</button>
    </form>
  );
};

export default Form;
