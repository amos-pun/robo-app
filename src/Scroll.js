import React from "react";

const Scroll = (props) => {
  return (
    <div
     className="p-2 m-5"
      style={{ overflowY: "scroll", border: "3px solid black", height: "70vh" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
