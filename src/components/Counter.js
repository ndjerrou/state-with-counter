// hook
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const addOne = () => {
    // count = count + 1; XXXXX
    setCount(count + 1); // oui oui oui
    console.log('count after setCount = ', count);
  };
  const minusOne = () => {
    setCount(count - 1);
  };

  // add two buttons : one for reset the count
  // one to add + 2 to the count

  return (
    <div>
      <h4>Count : {count}</h4>
      <button onClick={addOne}>+</button>
      <button onClick={minusOne}>-</button>
    </div>
  );
};

export default Counter;
