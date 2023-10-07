import React from "react";

import "./CurrentEvents.css";

export default function CurrentEvents() {
 return (
  <div className="CurrentEvents">
   <img
    className="img-fluid"
    src={require("./images/carnival-event.jpg")}
    alt="nautilus carnival event"
   />
  </div>
 );
}
