import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named count, initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
