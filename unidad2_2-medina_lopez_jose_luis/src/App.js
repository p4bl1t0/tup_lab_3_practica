import { useState, useRef } from "react";
import "./App.css";
import Input from "./components/Input";
import ArrayElements from "./components/ArrayElements";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);
  const [inputToEdit, setInputToEdit] = useState();
  const [editing, setEditing] = useState(false);
  const inputFocus = useRef(null);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const clickHandler = () => {
    if (inputValue !== "") {
      if (!editing) {
        setArray([...array, inputValue]);
      } else {
        const filteredArray = array.filter((x, i) => i !== inputToEdit);
        setArray([...filteredArray, inputValue]);
      }
      setEditing(false);
      setInputValue("");
    }
  };

  const onInputEdit = (index) => {
    inputFocus.current.focus();
    setEditing(true);
    setInputToEdit(index);
  };

  const onInputDelete = (index) => {
    const filteredArray = array.filter((x, i) => i !== index);
    setArray([...filteredArray]);
  };

  return (
    <div className="App">
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputHandler={inputHandler}
        clickHandler={clickHandler}
        editing={editing}
        inputFocus={inputFocus}
      />
      <div>
        {array.map((elem, index) => (
          <ArrayElements
            elem={elem}
            index={index}
            onInputDelete={onInputDelete}
            onInputEdit={onInputEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;