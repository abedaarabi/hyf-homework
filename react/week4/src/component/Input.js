import { React, useState, useEffect, useRef } from "react";
import User from "./User";
import { GithubContext } from "./GithubContext";

export default function Input() {
  const [inputValue, setInputValue] = useState();
  const [githubValue, setGithubValue] = useState([]);
  const [handleError, setHandleError] = useState();

  const didMount = useRef(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (didMount.current) {
        fetch(`https://api.github.com/search/users?q=${inputValue}`)
          .then((response) => {
            console.log(response);

            setHandleError(!response.ok);

            return response.json();
          })
          .then((data) => {
            return setGithubValue(data.items);
          });
      } else {
        didMount.current = true;
      }
    }, 2000);
    return () => clearTimeout(timeOut);
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
