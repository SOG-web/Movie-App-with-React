import React from "react";
import "../App.css";

export default function NavBar() {
  const style = {
    display: "flex",
    justifyContent: "spaceBetween",
    overflow: "hidden",
  };
  return (
    <header>
      <div style={style} className="header">
        <h1 className="demo">DEMO Streaming</h1>
        <div className="links">
          <button className="login">Log In</button>
          <button className="free-trial">Start your free trial</button>
        </div>
      </div>
    </header>
  );
}
