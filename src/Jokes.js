import React, { useState, useReducer, useEffect } from "react";
const Jokes = () => {
  const [post, setPost] = useState([]);
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return { ...state, isloading: true };

      case "FETCH_SUCCESS":
        //console.log(action.payload, "pYLO");
        return { error: false, isloading: false, data: action.payload };
      case "FETCH_FAILURE":
        return { ...state, isloading: false, error: true };
      default:
        console.log("def");
        return { state };
    }
  };
  const initialState = {
    data: [],
    error: false,
    isloading: false
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    let fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let res = await data.json();
        //console.log(res, "res");
        dispatch({ type: "FETCH_SUCCESS", payload: res });
      } catch (error) {
        console.log(error, "err");
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    fetchData();
  }, [post]);
  const handleClick = async () => {
    setPost(state.data);
    dispatch({ type: "FETCH_SUCCESS" });
  };

  console.log(post, "post");
  //console.log(state, "post1");
  return (
    <div>
      <h3>Chuk Nurris Jokes</h3>
      <img
        src="https://c-n-jokes.netlify.app/chuck-norris.png"
        alt="chuk-nurris"
      />
      <button onClick={handleClick}>Random</button>
    </div>
  );
};
export default Jokes;
