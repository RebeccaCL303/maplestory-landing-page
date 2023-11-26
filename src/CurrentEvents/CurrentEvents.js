import React from "react";
import "./CurrentEvents.css";
import newAge from "../images/CurrentEvents/new-age.png";

export default function CurrentEvents() {
 return (
  <div className="CurrentEvents">
   <i className="fa-solid fa-chevron-left"></i>
   <img className="image" src={newAge} />
   <i className="fa-solid fa-chevron-right text-end"></i>
  </div>
 );
}
