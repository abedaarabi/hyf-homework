import { React, useState, useEffect } from "react";
import Reservations from "./Reservations";
import ReservationFrom from "./ReservationFrom";
import MealForm from "./MealForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export function Home() {
  const [meals, setMeals] = useState([]);
  const fetctData = async () => {
    const response = await (await fetch("http://localhost:5000/")).json();

    console.log(response);
    setMeals(response);
  };

  useEffect(() => {
    document.title = "Meal Share";
    fetctData();
  }, []);

  return (
    <Router>
      <div>
        <h1 style={{ backgroundColor: "rebeccapurple", color: "white" }}>
          Meal App
        </h1>
      </div>
      <Link to={"/meal"}>
        <button>Add Meal</button>
      </Link>
      <Switch>
        <Route exact path={"/"}>
          <Meal param={meals} />
        </Route>
        <Route path={"/meals/:id"}>
          <Details param={meals} />
        </Route>
        <Route path={"/meal"}>
          <MealForm />
          <Meal param={meals} />
        </Route>
      </Switch>
    </Router>
  );
}

function Meal({ param }) {
  return (
    <div>
      {param.map((meal) => (
        <div key={meal.id}>
          <Link to={`/meals/${meal.id}`}>
            <h2 style={{ color: "red" }}>{meal.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

function Details({ param }) {
  const params = useParams();
  const currentParam = param.find(
    (paramId) => Number(params.id) === paramId.id
  );

  return (
    <div>
      <Link to={"/"}> Home </Link>

      <h3>{currentParam.created_date}</h3>
      <h3>{currentParam.price} dkk</h3>
      <h3>{currentParam.title}</h3>

      <div>
        <ReservationFrom />
        <Reservations />
      </div>
    </div>
  );
}
