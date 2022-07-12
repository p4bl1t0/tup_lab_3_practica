import {useState} from "react";
import './App.css';
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [textArray, setTextArray] = useState([]);
  return (
    <div className="App">
      <Input setTextArray={setTextArray} textArray={textArray}/>
      <List textArray={textArray} />
    </div>
  );
}

export default App;
