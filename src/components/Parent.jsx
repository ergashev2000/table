import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const DataLength = (argument) => {
    setCount(argument);
  };
  return (
    <div>
      <h2>{count}</h2>
      <Child getData={DataLength} />
    </div>
  );
};

export default Parent;
