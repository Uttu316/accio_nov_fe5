import { useState } from "react";

const Counter = () => {
  // let count = 0
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1); //async

    // document.getElementById("Counter_count").innerHTML = count;
  };

  const onMinus = () => {
    setCount((currCount) => {
      return currCount - 1;
    });
    // document.getElementById("Counter_count").innerHTML = count;
  };

  return (
    <div>
      <h2 id="Counter_count">{count}</h2>
      <button onClick={onAdd}>Add</button>
      <button onClick={onMinus}>Minus</button>
      {count >= 10 && <h3>Limit Reached</h3>}
      {count < 10 && <h4>Add values</h4>}
    </div>
  );
};
export default Counter;
