import { React, useState, useEffect } from "react";

function Reservations(props) {
  const [reservations, setReservations] = useState([]);

  const fetctData = async () => {
    const response = await (
      await fetch("http://localhost:5000/reservations")
    ).json();

    setReservations(response);
  };

  const remove = async (id) => {
    const axios = require("axios");
    // const deletedId = reservations.filter((item) => item.id !== id);

    await axios.delete(`http://localhost:5000/reservations?id=${id}`);
  };
  useEffect(() => {
    fetctData();
  }, []);

  return (
    <div>
      {reservations.map((reservation) => (
        <li>
          <p>name: {reservation.name}</p>
          <p>email: {reservation.email}</p>
          <p>phonenumber: {reservation.phonenumber}</p>
          <button onClick={() => remove(reservation.id)}>remove</button>
        </li>
      ))}
    </div>
  );
}

export default Reservations;
