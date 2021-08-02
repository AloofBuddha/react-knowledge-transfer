import { useState } from 'react';
import CommonCounter from './CommonCounter';

export default function Counter() {

  const [counterValue, setCounterValue] = useState(0);

  const decrement = () => setCounterValue(counterValue - 1);
  const increment = () => setCounterValue(counterValue + 1);

  return (
    <div className="example">
      <h1>A Simple Counter</h1>
      <CommonCounter 
        value={counterValue} 
        decrement={decrement} 
        increment={increment}
      />
    </div>
  );
}