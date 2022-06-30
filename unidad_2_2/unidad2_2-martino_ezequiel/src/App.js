import { useState, useRef } from "react";
import "./App.css";

import Input from "./components/Input";
import ArrayElement from "./components/ArrayElement";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);
  const [inputToEdit, setInputToEdit] = useState();
  const [editing, setEditing] = useState(false);
  const inputFocus = useRef(null);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };
  const clickHandler = () => {
    if (inputValue !== "") {
      if (!editing) {
        setArray([...array, inputValue]);
      } else {
        const filteredArray = array.filter((e, i) => i !== inputToEdit);
        setArray([...filteredArray, inputValue]);
      }
      setEditing(false);
      setInputValue("");
    }
  };

  const onInputDelete = (index) => {
    const filteredArray = array.filter((element, i) => i !== index);
    setArray([...filteredArray]);
  };

  const onInputEdit = (index) => {
    inputFocus.current.focus();
    setEditing(true);
    setInputToEdit(index);
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
          <ArrayElement
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
