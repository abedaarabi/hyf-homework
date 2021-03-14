import React from "react";
const moment = require("moment");
export default function Form({ addNewShift, errorMassege }) {
  const [inputValue, setInputValue] = React.useState({
    descreption: "",
    date: "",
  });

  const formated = moment(new Date()).format("YYYY-MM-DD");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.descreption || !inputValue.date) {
      errorMassege(true);
    } else if (inputValue.date < formated) {
      return alert("wrong date");
    } else {
      errorMassege(false);
      addNewShift(inputValue.descreption, inputValue.date);
      setInputValue({ descreption: "", date: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descreption</label>
        <input
          type="text"
          placeholder="add descreption..."
          value={inputValue.descreption}
          onChange={(e) => {
            setInputValue({ ...inputValue, descreption: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={inputValue.date}
          onChange={(e) => {
            setInputValue({ ...inputValue, date: e.target.value });
          }}
        />
      </div>
      <div>
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}
