import { React, useContext } from "react";
import { GithubContext } from "./GithubContext";
const User = () => {
  const githunContext = useContext(GithubContext);
  console.log(githunContext);
  if (githunContext.githubValue) {
    return (
      <div>
        {githunContext.handleError === true ? (
          <p>too many request wait a moment</p>
        ) : (
          githunContext.githubValue.map((user) => (
            <p key={user.id}>{user.login}</p>
          ))
        )}
      </div>
    );
  }
  return <p>Loading...</p>;
};

export default User;
