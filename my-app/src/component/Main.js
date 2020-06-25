import React from "react";
import PlaceHolder from "./assets/placeholder.png";

export default function Main() {
  return (
    <div>
      <img className="placeHolder" src={PlaceHolder} alt="place holder" />
    </div>
  );
}
