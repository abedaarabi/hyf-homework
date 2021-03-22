import React from "react";
export default function Item({
  item,
  removeItem,
  lineThrough,
  updateDescription,
}) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [value, setValue] = React.useState(item.descreption);

  if (isEdit) {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <span>
          <button
            onClick={() => {
              setIsEdit(false);
              updateDescription(item.id, value);
            }}
          >
            Save
          </button>
        </span>
      </div>
    );
  }

  return (
    <div key={item.id}>
      <li>
        <span>
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => lineThrough(item.id)}
          />
        </span>
        <span
          style={{
            textDecoration: item.isCompleted === true ? "line-through" : "",
          }}
        >
          {item.descreption} | {item.date}
        </span>

        <span>
          <button onClick={() => removeItem(item.id)}>remove</button>
        </span>
        <span>
          <button onClick={() => setIsEdit(true)}>Edit</button>
        </span>
      </li>
    </div>
  );
}
