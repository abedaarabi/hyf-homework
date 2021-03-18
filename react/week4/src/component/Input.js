import { React, useState, useEffect, useRef } from "react";
import User from "./User";
import { GithubContext } from "./GithubContext";
export default function Input() {
  const [inputValue, setInputValue] = useState();
  const [githubValue, setGithubValue] = useState([]);
  const [handleError, setHandleError] = useState();

  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      fetch(`https://api.github.com/search/users?q=${inputValue}`)
        .then((response) => {
          if (!response.ok) {
            setHandleError(response.ok);
          } else {
            return response.json();
          }
        })
        .then((data) => {
          if (!data) {
            return;
          } else return setGithubValue(data.items);
        });
    } else {
      didMount.current = true;
    }
  }, [inputValue]);

  const handleInput = (event) => {
    return setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInput} />
      <GithubContext.Provider value={{ githubValue, handleError }}>
        <User />
      </GithubContext.Provider>
    </div>
  );
}
