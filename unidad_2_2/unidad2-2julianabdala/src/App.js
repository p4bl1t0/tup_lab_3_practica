import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Array from "./components/Array";

function App() {
  const [array, setArray] = useState([]); // el state de array va con []
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <Input
        array={array}
        setArray={setArray}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Array array={array} setArray={setArray} />
    </div>
  );
}

export default App;
