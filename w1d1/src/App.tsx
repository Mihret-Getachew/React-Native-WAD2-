import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const buttonHandler = () => {
    setCount(count + 1);
  };
  const buttonHandler2 = () => {
    setCount2(count2 + 10);
  };
  return (
    <div>
      <button onClick={buttonHandler}>
        <div>{count}</div> increment 1
      </button>
      <button onClick={buttonHandler2}>
        <div>{count2}</div>increment 10
      </button>
    </div>
  );
}

export default App;
