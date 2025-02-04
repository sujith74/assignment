import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';

const Counter = () => {
  const [count, setCount] = useState(0);
//   const animation = useSpring({
//     backgroundColor: `rgba(${count * 20}, ${count * 10}, 255, 0.5)`,
//     config: { duration: 500 },
//   });

  return (
    // <animated.div style={{ ...animation, padding: '20px', textAlign: 'center' }}>
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    {/* // </animated.div> */}
    </div>
  );
};

export default Counter;
