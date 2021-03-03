import React from "react";

const Todo = ({ taskName, description, datetime, deadline, TodoClass }) => (
  <div className={TodoClass}>
    <p>Task: {taskName}</p>
    <p>Description: {description}</p>
    <p>Datetime {datetime}</p>
    <p>Deadline: {deadline}</p>
  </div>
);



export default Todo;
