import { React } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Link } from "react-router-dom";
function MealForm() {
  const { register, handleSubmit } = useForm("");

  const onSubmit = (data) => {
    data.id = Math.floor(Math.random() * 100);
    console.log(data);
    if (!data.title || !data.limit) {
      return alert("Inputs Empty");
    } else {
      const axios = require("axios");
      axios
        .post("http://localhost:5000/meal", data)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <Link to={"/"}> Home </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input type="text" name="title" ref={register} />
        </div>
        <div>
          <label>Reviews</label>
          <input type="text" name="reviews" ref={register} />
        </div>
        <div>
          <label>Limit</label>
          <input type="text" name="limit" ref={register} />
        </div>
        <div>
          <label>Date</label>
          <input type="date" name="created_date" ref={register} />
        </div>
        <div>
          <label>Price</label>
          <input type="text" name="price" ref={register} />
        </div>
        <div>
          <button type="submit">Add Meal</button>
        </div>
      </form>
    </div>
  );
}

export default MealForm;
