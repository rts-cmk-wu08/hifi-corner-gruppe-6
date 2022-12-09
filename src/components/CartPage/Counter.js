import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setcount] = useState(0); 

  useEffect(() => {
    console.log("Testingg counter in cart page");
  }, [count]);

  const handleIncrease = () => count < 15 && setcount(count + 1);

  const handleDecrease = () => count > 0 && setcount(count - 1);

  return (
    <>
      
      <button onClick={handleIncrease}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrease}>-</button>
    </>
  );
};
export default Counter;