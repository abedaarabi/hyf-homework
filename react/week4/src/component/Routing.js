// import { React, useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
// } from "react-router-dom";

// const API =
//   "https://gist.githubusercontent.com/braedongough/63d00d3035cbabc468e07c5df713d57a/raw/21e0699bd9f48895d90783b22dc1321c47ef34a6/blob-posts.json";
// const Routing = () => {
//   const [apiResponse, setApitResponse] = useState([]);
//   useEffect(() => {
//     fetch(API)
//       .then((respone) => respone.json())
//       .then((data) => setApitResponse(data))
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(apiResponse);
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/">
//             <Home api={apiResponse} />
//           </Route>
//           <Route path="/post/:id">
//             <Post posts={apiResponse} />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };
// function Home({ api }) {
//   return (
//     <div>
//       <h1>HYF most awsome blog</h1>
//       <br />
//       {api.map((response) => (
//         <div key={response.id}>
//           <Link to={`/post/${response.id}`}>{response.title}</Link>
//           <p>{`Published by ${response.author} on ${response.createdAt}`}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// function Post({ posts }) {
//   const params = useParams();
//   const post = posts.find((post) => params.id === Number(post.id));
//   console.log(post);
//   return (
//     <div>
//       {!post ? (
//         <p> Post Not Found</p>
//       ) : (
//         <div>
//           <p> we are on: {params.id}</p>
//           <p>{post.content}</p>
//         </div>
//       )}

//       <Link to="/">go back</Link>
//     </div>
//   );
// }

// export default Routing;
