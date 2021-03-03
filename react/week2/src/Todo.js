import { React, useState, useEffect } from "react";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

function Add({ item, onRemove, customCssButton, css, defaultCheckbox }) {
  return (
    <div>
      <input type="checkbox" id={item.id} className={defaultCheckbox} />
      <label className={css}> {item.description}</label>
      <button className={customCssButton} onClick={onRemove}>
        Delete
      </button>
    </div>
  );
}
// rendom Text
const rendomText = () => {
  return todos.map((item) => {
    return item.description;
  });
};

function List({ arr }) {
  const [addtodo, setAddTodo] = useState(todos);

  function removeItem(id) {
    const newList = addtodo.filter((item) => item.id !== id);

    setAddTodo(newList);
  }

  const newText = rendomText();

  const randomText = newText[Math.floor(Math.random() * newText.length)];

  const addItem = () => {
    setAddTodo(
      addtodo.concat({
        id: Math.floor(Math.random() * 100),
        description: randomText,
      })
    );
  };
  return (
    <div>
      <button onClick={addItem} className={"addTodo"}>
        Add Todo
      </button>
      <h3>
        {" "}
        You have {<span className={"seconds"}>{addtodo.length}</span>} tasks
      </h3>
      {addtodo.length > 0 ? (
        addtodo.map((item) => (
          <div key={item.id}>
            <Add
              customCssButton={"CutomButton"}
              css={"text"}
              defaultCheckbox={"defaultCheckbox"}
              item={!item ? <h1>sdfsdf</h1> : item}
              onRemove={() => removeItem(item.id)}
            />
          </div>
        ))
      ) : (
        <p className="noItem">No items</p>
      )}
    </div>
  );
}

function Todos() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>
        You Have Used <span className={"seconds"}>{seconds}</span> on this
        website
      </h3>

      <List />
    </div>
  );
}

export default Todos;
