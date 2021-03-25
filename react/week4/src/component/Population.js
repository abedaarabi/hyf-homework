// import { React, useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
// } from "react-router-dom";

// export default function Population() {
//   const [population, setPopulation] = useState([]);

//   async function getPopulation() {
//     const response = await (
//       await fetch(
//         "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
//       )
//     ).json();
//     console.log(response.data);
//     setPopulation(response.data);
//   }
//   useEffect(() => {
//     getPopulation();
//   }, []);
//   return (
//     <Router>
//       <div>
//         <h2 style={{ backgroundColor: "rebeccapurple", color: "white" }}>
//           Select State
//         </h2>
//         <Switch>
//           <Route exact path="/">
//             <Year years={population} />
//           </Route>
//           <Route path="/:id">
//             <Details detail={population} />
//           </Route>
//           <Route path="*">
//             <h1>Error</h1>
//             <Link to={"/"}>home</Link>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Year({ years }) {
//   return (
//     <div>
//       {years.map((year) => (
//         <div key={year.Population}>
//           <Link to={`/${year.Population}`}>
//             <h3>{year["ID Year"]}</h3>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Details({ detail }) {
//   const params = useParams();

//   const param = detail.find((year) => Number(params.id) === year.Population);

//   return (
//     <div>
//       {!param ? (
//         <h1>No Data</h1>
//       ) : (
//         <div>
//           <h1>{param.Population}</h1>
//         </div>
//       )}
//       <Link to={"/"}>home</Link>
//     </div>
//   );
// }
