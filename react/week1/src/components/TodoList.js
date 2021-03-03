import React from "react";

import Todo from "./Todo";
const items = [
  {
    task: "Get out of bed",
    description:
      "Wake up and get out of bed, straighten sheets, get dressed, and tidy up",
    datetime: "Wed Sep 13 2017",
    deadline: "06:30",
  },
  {
    task: "Brush teeth",
    description:
      "Use bathroom, brush teeth, put on deoderant, brush hair, and wash face",
    datetime: "Thu Sep 14 2017",
    deadline: "06:45",
  },
  {
    task: "Eat breakfast",
    description: "Make breakfast for family and set table",
    datetime: "Fri Sep 15 2017",
    deadline: "07:15",
  },
  {
    task: "sleep",
    description: "Sleep is a naturally recurring state of mind and body",
    datetime: "Fri Sep 16 2017",
    deadline: "22:15",
  },
];

const TodoList = ({ customCss }) => {
  return (
    <div className={customCss}>
      <h2>{`You have ${items.length}  list todo!`}</h2>
      {items.map((item) => {
        return (
          <>
            <Todo
              TodoClass={"list"}
              taskName={item.task}
              description={item.description}
              datetime={item.datetime}
              deadline={item.deadline}
            />
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
