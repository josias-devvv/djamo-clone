import React from "react";
import "./style.css";

export default function Buttony({
  text = "Button",
  onClick = () => {},
  top = 6,
  left = 16,
}) {
  return (
    <div
      id="my-button"
      style={{
        padding: `${top}px ${left}px`,
      }}
    >
      {text}
    </div>
  );
}
