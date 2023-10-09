import React from "react";

import "./CurrentEvents.css";

export default function CurrentEvents() {
 return (
  <div className="CurrentEvents">
   <i class="fa-solid fa-chevron-left"></i>
   <ul className="img-gallery">
    <li>
     <img
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
   <i class="fa-solid fa-chevron-right text-end"></i>
  </div>
 );
}
