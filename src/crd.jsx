import { useState } from "react";

function Crud() {
  const memory = localStorage.getItem("data");
  console.log(JSON.parse(memory));

  const [data, setData] = useState(
    memory
      ? JSON.parse(memory)
      : [
          { id: 1, name: "Nurbek" },
          { id: 2, name: "Ali" },
          { id: 3, name: "Vali" },
        ]
  );

  localStorage.setItem("data", JSON.stringify(data));

  const [names, setNames] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [select, setSelect] = useState(null);
  const getDelete = (ids) => {
    const newArr = data.filter((value) => value.id !== ids);
    setData(newArr);
  };

  const getSave = () => {
    const newData = [...data, { id: data.length + 1, name: names }];
    setData(newData);
  };

  const getEdit = (value) => {
    setSelect(value.id);
    setTitle(value.name);
  };

  const getEditSave = () => {
    const newArraying = data.map((value) =>
      select === value.id ? { ...value, name: title } : value
    );
    setData(newArraying);
    setSelect(null);
  };

  const getClear = () => {
    localStorage.clear("data");
  };

  const getSearch = (e) => {
    const newArray = data.map((value) =>
      value.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(newArray);
    if (e.target.value === " ") {
      setData([
        { id: 1, name: "Nurbek" },
        { id: 2, name: "Ali" },
        { id: 3, name: "Vali" },
      ]);
    }
  };

  return (
    <div className="App">
      <div>
        <input onChange={getSearch} type="text" placeholder="Search user ..." />
        <select>
          <option value="status">status</option>
          <option value="name">name</option>
        </select>
      </div>
      <input
        placeholder="write name"
        onChange={(e) => setNames(e.target.value)}
      />
      <button onClick={getSave}>save</button>
      <table border={1} style={{ width: "50%  " }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        {data.map((value, key) => (
          <tbody key={key}>
            <tr>
              <td>{value.id}</td>
              <td>
                {select === value.id ? (
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  value.name
                )}
              </td>
              <td>
                <button onClick={() => getDelete(value.id)}>delete</button>
                {select === value.id ? (
                  <button onClick={getEditSave}>save</button>
                ) : (
                  <button onClick={() => getEdit(value)}>edit</button>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <button onClick={getClear}>clear</button>
    </div>
  );
}

export default Crud;
