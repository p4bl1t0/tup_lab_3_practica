import './App.css';
import { useState } from 'react';
import Input1 from './components/Input1';
import Checkbox from './components/Checkbox';
import LogicGates from './components/LogicGates'; 


function App() {

  const numeroAleatorio = () => Math.round(Math.random());
  const [input1, setInput1] = useState(numeroAleatorio());
  const [checkbox, setCheckbox] = useState(0);
  const [select, setSelect] = useState(0);
  const [select2, setSelect2] = useState(0);
  const [range, setRange] = useState(0);
  const [radio, setRadio] = useState(0);
  const [select3, setSelect3] = useState(0);

  const handleRange = event =>{
    setRange(event.target.value);
    if (Number(event.target.value) >= 50) {
      setRange(1);
    } else {
      setRange(0);
      }
    };
    
  return (
    <div className="App">
      <div className='container'>
        <div className='logic'>
          <span>Compuerta</span>
          <Input1 input1={input1} setInput1={setInput1} />    
          <Checkbox checkbox={checkbox} setCheckbox={setCheckbox} />       
          <LogicGates 
            input1={input1} 
            checkbox={checkbox}  
            select={select}
            setSelect={setSelect}
          />
          <div><span>Salida: { select }</span></div>
        </div>      
        <div className='logic'>
          <div>
            <span>Compuerta</span>
            <input type="range" onChange={event => handleRange(event)} />
            <input type="radio" name="radio" onClick={() => setRadio(0)} />
            <input type="radio" name="radio" onClick={() => setRadio(1)} />
          </div>
          <LogicGates
            input1={radio}
            checkbox={range}
            select={select2}
            setSelect={setSelect2}
          />
          <div><span>Salida: { select2 }</span></div>
        </div>
        <div className='logic'>
          <div>
            <span>Combinación:</span>
            <LogicGates
              input1={select}
              checkbox={select2}
              select={select3}
              setSelect={setSelect3}
            />
            <div>
              <span>Salida: { select3 }</span>
              </div>
          </div>
        </div>
        </div>          
    </div>
  );
};

export default App;
