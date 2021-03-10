import React from "react";
import Form from "./Form";
import Item from "./Item";

export default function Additem() {
  const [item, setItem] = React.useState([]);

  const addNewShift = (descreption, date) => {
    const inputItem = item.concat({
      descreption,
      date,
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
    });
    setItem(inputItem);
  };
  const removeItem = (id) => {
    const newItem = item.filter((item) => item.id !== id);
    setItem(newItem);
  };

  const lineThrough = (id) => {
    const newItem = item.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setItem(newItem);
  };
  const updateDescription = (id, newVlue) => {
    const newItem = item.map((item) => {
      if (item.id === id) {
        return { ...item, descreption: newVlue };
      }
      return item;
    });
    setItem(newItem);
  };

  return (
    <div>
      <h4
        style={{
          backgroundColor: "black",
          width: 200,
          margin: "auto",
          color: "white",
          marginTop: 30,
        }}
      >
        what you have for today
      </h4>
      <Form addNewShift={addNewShift} />
      <div>
        <div>
          you have
          <h5
            style={{
              color: "red",
              backgroundColor: "yellowgreen",
              width: 60,
              margin: "auto",
            }}
          >
            {item.length}
          </h5>
          todo.
        </div>
      </div>
      {item.length
        ? item.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                removeItem={removeItem}
                lineThrough={lineThrough}
                updateDescription={updateDescription}
              />
            );
          })
        : "No Items"}
    </div>
  );
}
