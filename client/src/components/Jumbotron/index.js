import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron">
        <h2>Google Books Search</h2>
        <h3>Feel free to search for books and save books for later use</h3>
      {children}
    </div>
  );
}

export default Jumbotron;
