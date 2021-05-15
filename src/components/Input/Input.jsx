import React from "react";
import "./styles.css";

export default function Input({ placeholder, id }) {
  return <input id={id} type="text" placeholder={placeholder} />;
}
