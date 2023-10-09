import React from "react";

import "./CurrentEvents.css";

export default function CurrentEvents() {
 function getWidth() {
  const imgWidth = document.getElementById("image").offsetWidth;
  console.log(imgWidth);
 }

 return (
  <div className="CurrentEvents">
   <i className="fa-solid fa-chevron-left"></i>
   <ul>
    <li id="image">
     <img
      onLoad={getWidth}
      className="img-fluid"
      src={require("./images/carnival-event.jpg")}
      alt="nautilus carnival event"
     />
    </li>
    <li>
     <img
      className="img-fluid"
      src={require("./images/6th-star.jpg")}
      alt="nautilus carnival event"
     />
    </li>
   </ul>
   <i className="fa-solid fa-chevron-right text-end"></i>
  </div>
 );
}
