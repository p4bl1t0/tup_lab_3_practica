const InputComponent = ({ inputName, inputId, inputType, input, setInput }) => {
  const inputHandler = (e) => {
    if (typeof setInput === "function") {
      switch (inputType) {
        case "number":
          setInput(e.target.value);
          break;
        case "checkbox":
          setInput(e.target.checked);
          break;
        case "range":
          setInput(e.target.value);
          break;
        case "radio":
          inputName === "1" ? setInput(1) : setInput(0);
          break;
        default:
          break;
      }
    } else console.error("setInput is not a function");
  };
  return (
    <div>
      <label for={inputId}>{inputName}</label>
      <input
        value={input}
        type={inputType}
        name={inputId}
        min="0"
        max="1"
        onChange={inputHandler}
      />
    </div>
  );
};

export default InputComponent;
