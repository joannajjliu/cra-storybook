import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
