import React, { useState } from "react";
import { Button } from "../button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const incre = () => setCount(count + 1);
  const decre = () => setCount(count - 1);
  return (
    <div>
      <p>Counter: {count}</p>
      <Button onClick={incre} label="Incre" />
      <Button onClick={decre} label="Decre" />
    </div>
  );
};
