import React from "react";
import "./ListGroup.css";
const ListGroup = (props) => {
  console.log(props);
  console.log(props.color);
  return (
    <div className="created-group" style={{ background: props.color }}>
      <h1>{props.text}</h1>
    </div>
  );
};

export default ListGroup;
