import React from "react";

export default function Container({ children }) {
  return (
    <div>
      <div
        style={{
          maxWidth: "1024px",
          margin: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
