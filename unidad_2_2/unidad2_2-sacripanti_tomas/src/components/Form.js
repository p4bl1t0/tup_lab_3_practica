const Form = ({
  textInput,
  setTextInput,
  setTextArray,
  textArray,
}) => {

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    if (textInput === "") {
      console.log("Agregue datos válidos, de otra manera no será posible agregarlos.");
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
