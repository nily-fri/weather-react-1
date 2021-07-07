import React from "react";
import "./Weather.css";

export default function Header(props) {
  return (
    <div>
      {" "}
      <h1> {props.city} </h1>
      <h2> {props.date} </h2>
    </div>
  );
}
