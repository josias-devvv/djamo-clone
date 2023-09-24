import React from "react";
import "./style.css";

export default function CardService({ children, title, text }) {
  return (
    <div className="cardo">
      <div className="cardo-1">
        <div className="svg-icon">{children}</div> {title}
      </div>
      {text}
    </div>
  );
}
