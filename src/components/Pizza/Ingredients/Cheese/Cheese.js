import React from "react";
import "./Cheese.css";

const cheese = (props) => {
  return (
    <div>
      <div className={props.name}></div>
    </div>
  );
}

export default cheese;
