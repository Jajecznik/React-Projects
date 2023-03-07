import './App.css'
import { useReducer } from 'react';

function reducer(state, action) {

}

function App() {

  const [state, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator-grid">

      <div className="output">
        <div className="previous-operand">Top</div>
        <div className="current-operand">Bottom</div>
      </div>
      <button className="darker-color">%</button>
      <button className="darker-color">CE</button>
      <button className="darker-color">C</button>
      <button className="darker-color">DEL</button>

      <button className="darker-color">1/x</button>
      <button className="darker-color">x^2</button>
      <button className="darker-color">x^(1/2)</button>
      <button className="darker-color">/</button>

      <button className="brighter-color">7</button>
      <button className="brighter-color">8</button>
      <button className="brighter-color">9</button>
      <button className="darker-color">*</button>

      <button className="brighter-color">4</button>
      <button className="brighter-color">5</button>
      <button className="brighter-color">6</button>
      <button className="darker-color">-</button>

      <button className="brighter-color">1</button>
      <button className="brighter-color">2</button>
      <button className="brighter-color">3</button>
      <button className="darker-color">+</button>

      <button className="brighter-color">+/-</button>
      <button className="brighter-color">0</button>
      <button className="brighter-color">,</button>
      <button className="dark-color">=</button>
    </div>
  );
}

export default App;
