import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';
import calculate from '../logic/calculate';

const App = () => {

  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleClick = buttonName => {
    const data = {total, next, operation};
    const result = calculate(data, buttonName);

    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation)
  }

  render() {
    const { total, next, operation } = this.state;
    let result;
    if (operation === null) {
      result = total;
    } else if (operation === '+/-') {
      result = (next === null || next === '0') ? total : next;
    } else {
      result = next === null ? operation : next;
    }

    return (
      <div className="App">
        <Display className="display" result={result} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    );
  }
}

export default App;
