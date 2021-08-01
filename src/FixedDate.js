// import React from "react";

export default function FixedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = props.date.getDate();
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  return `${day}, ${month} ${date}`;
}
