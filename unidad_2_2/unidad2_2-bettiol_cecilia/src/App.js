import "./App.css";
import { useState } from "react";
import InputAndButton from "./components/InputAndButton";
import ShowItem from "./components/ShowItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [array, setArray] = useState([]);

  return (
    <div className="App">
      <InputAndButton
        inputText={inputText}
        array={array}
        setArray={setArray}
        setInputText={setInputText}
      />
      <ShowItem array={array} setArray={setArray} />
    </div>
  );
}

export default App;
