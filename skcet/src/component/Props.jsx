import { useState } from "react";

const Props = () => {
  const [items, setItems] = useState([]);
  const [addItem, setAddItem] = useState("");
  const HandleList = (e) => {
    e.preventDefault();

    setItems([...items, addItem]);
    console.log(addItem);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center ",
      }}
    >
      <form action="" onSubmit={HandleList}>
        <h1>SKCET PROJECT</h1>
        <label>Enter the List: </label>
        <input type="text" onChange={(e) => setAddItem(e.target.value)} />{" "}
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Props;
