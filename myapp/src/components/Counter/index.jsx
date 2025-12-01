import { useState } from "react";
import styles from "./counter.module.css";

console.log(styles);

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
    <div className={styles.counter_container}>
      <h2 className={styles.counter_text} id="Counter_count">
        {count}
      </h2>
      <div className={styles.counter_actions}>
        <button onClick={onAdd}>Add</button>
        <button onClick={onMinus}>Minus</button>
      </div>

      {count >= 10 && <h3>Limit Reached</h3>}
      {count < 10 && <h4>Add values</h4>}
    </div>
  );
};
export default Counter;
