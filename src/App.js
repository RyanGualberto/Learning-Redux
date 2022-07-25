import './App.css';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio';
import React, {useState} from 'react';

function App() {

  const [min, setMin] = useState(100)
  const [max, setMax] = useState(1000)

  return (
    <div className="App">
      <h1>Exercicio React Redux Simples</h1>
      <div className='linha'>
        <Intervalo min={min} max={max}
        onMinChanged={setMin} 
        onMaxChanged={setMax}
        />
      </div>
      <div className='linha'>
        <Media min={min} max={max} />
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
