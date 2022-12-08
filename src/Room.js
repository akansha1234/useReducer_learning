import React, { useReducer } from "react";
import reducer from "./Reducer";
const Room = () => {
  const [room, dispatch] = useReducer(reducer, {
    light: {
      display: "off",
      level: 0
    }
  });

  const handleClick = () => {
    dispatch(room.light.level + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>{room.light.display}</button>
    </div>
  );
};
export default Room;
