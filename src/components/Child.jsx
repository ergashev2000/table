import React, { useState } from "react";

const Child = (props) => {
  const [data, setData] = useState([
    { id: 1, name: "Nurbek" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Vali" },
  ]);

  const getDelete = (value) => {
    let newData = data.filter((val) => val.id !== value.id);
    setData(newData);
  };

  return (
    <div>
      {data.map((value) => (
        <div style={{ display: "flex" }}>
          <h2>{value.id}</h2>
          <h2>{value.name}</h2>
          <button onClick={() => getDelete(value)}>delete</button>
        </div>
      ))}
      {props.getData(data.length)}
    </div>
  );
};

export default Child;
