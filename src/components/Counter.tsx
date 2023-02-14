import React, { useState } from "react";
import classes from "./Counter.module.scss";
import "../index.scss";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className={classes.btn}>
      <h1 className="btn1">{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
