import { React, useContext } from "react";
import { GithubContext } from "./GithubContext";
const User = () => {
  const githunContext = useContext(GithubContext);
  console.log(githunContext.handleError);

  return (
    <div>
      {githunContext.handleError ? (
        <p>too many request wait a moment</p>
      ) : githunContext.githubValue.length > 0 ? (
        githunContext.githubValue.map((user) => (
          <p key={user.id}>{user.login}</p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default User;
