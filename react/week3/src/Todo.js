import React from "react";

function Todo(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div>
          <label>Todo Description</label>
          <input
            onChange={props.todoChange}
            type="text"
            placeholder="Add Todo..."
          />
        </div>
        <div>
          <label>DeadLine</label>
          <input onChange={props.adddeadLine} type="date" />
        </div>
        <div>
          <input type="Submit" />
        </div>
      </form>
    </div>
  );
}

function Item(props) {
  return (
    <div>
      <li className={props.redLine}>
        description: {props.description} | date: {props.date}
        <span>
          <input
            type="checkbox"
            checked={props.isCompleted}
            onChange={props.checkedItem}
          />
        </span>
        <span>
          <div>
            <button onClick={props.setIsEditMode}>Edit</button>
          </div>
        </span>
        <span>
          <button onClick={props.removeItem}>Remove</button>
        </span>
      </li>
    </div>
  );
}

function Addtodo(props) {
  const [description, setDescription] = React.useState();
  const [deadLine, setDeadLine] = React.useState();
  const [onSubmitDescription, setOnSubmitDescription] = React.useState();
  const [onSubmitDeadLine, setOnSubmitDeadLine] = React.useState();
  const [addTodo, setAddTodo] = React.useState([]);
  const [edit, setEdit] = React.useState(false);

  const updateInput = () => {
    if (edit) {
      return (
        <div>
          <input type="text" />
          <button onClick={() => setEdit(false)}>save</button>
        </div>
      );
    }
  };

  const handleTodoChange = (event) => {
    const { value } = event.target;
    setDescription(value);
  };
  const handleDeadLine = (event) => {
    const { value } = event.target;
    setDeadLine(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description || !deadLine) return;
    setOnSubmitDescription(description);
    setOnSubmitDeadLine(deadLine);

    const newAddTodo = addTodo.concat({
      description: onSubmitDescription,
      date: onSubmitDeadLine,
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
    });

    setAddTodo(newAddTodo);
  };

  const newArray = (id) => {
    const newItem = addTodo.filter((item) => item.id !== id);
    setAddTodo(newItem);
  };

  const lineThrough = (id) => {
    setAddTodo((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div>
      <Todo
        todoChange={handleTodoChange}
        adddeadLine={handleDeadLine}
        onSubmit={handleSubmit}
      />
      {addTodo.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{
              textDecoration: todo.isCompleted === true ? "line-through" : "",
            }}
          >
            <Item
              description={todo.description}
              date={todo.date}
              redLine={props.redLine}
              removeItem={() => {
                newArray(todo.id);
              }}
              setIsEditMode={() => updateInput}
              checkedItem={() => lineThrough(todo.id)}
              isCompleted={todo.isCompleted}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Addtodo;
