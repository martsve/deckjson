import React from 'react';

const CounterWidget = ({ count, setCounter }) => {
  function increase() {
    setCounter(count + 1);
  }

  return (
    <div className="App">
      <p>i = {count}</p>
      <button onClick={increase}>Increse</button>
    </div>
  );
}

export default CounterWidget;