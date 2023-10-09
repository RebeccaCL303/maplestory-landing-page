import React from "react";

import "./CurrentEvents.css";

export default function CurrentEvents() {
 function getWidth() {
  const imgWidth = document.getElementById("image").offsetWidth;
  return imgWidth;
 }

 function scrollLeft() {
  document.getElementById("img-gallery").scrollLeft += getWidth();
 }

 function scrollRight() {
  document.getElementById("img-gallery").scrollRight += getWidth();
 }

 return (
  <div className="CurrentEvents">
   <i onClick={scrollLeft} className="fa-solid fa-chevron-left"></i>
   <ul id="img-gallery">
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
   <i onClick={scrollRight} className="fa-solid fa-chevron-right text-end"></i>
  </div>
 );
}
