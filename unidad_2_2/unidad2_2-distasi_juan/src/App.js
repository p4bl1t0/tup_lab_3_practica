import { useState } from "react";

import ArrayElements from "./components/ArrayElements";
import Input from "./components/Input";

const App = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  return (
    <div>
      <Input input={input} setInput={setInput} array={array} setArray={setArray} />
      <ArrayElements array={array} setArray={setArray} />
    </div>
  );
};

export default App;
