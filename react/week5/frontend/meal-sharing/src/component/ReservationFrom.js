import { React } from "react";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function ReservationFrom({ postItem }) {
  const { register, handleSubmit } = useForm("");
  const params = useParams();

  const onSubmit = (data) => {
    data.id = Math.floor(Math.random() * 100);
    data.mealId = params.id;
    console.log(data);
    if (!data.name || !data.email) {
      return alert("Inputs Empty");
    } else {
      const axios = require("axios");
      axios
        .post("http://localhost:5000/reservations", data)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
      postItem(data);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>User Name</label>
          <input type="text" name="name" ref={register} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" ref={register} />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" name="phonenumber" ref={register} />
        </div>
        <div>
          <button type="submit">Add Reservation</button>
        </div>
      </form>
    </div>
  );
}

export default ReservationFrom;