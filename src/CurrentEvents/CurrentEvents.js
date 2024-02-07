import React from "react";
import "./CurrentEvents.css";
import newAge from "../images/CurrentEvents/new-age.png";
import seeMoreRest from "../images/buttons/play-now-rest.png";
import seeMoreHover from "../images/buttons/play-now-over.png";

export default function CurrentEvents() {
 return (
  <div className="CurrentEvents">
   <i className="fa-solid fa-chevron-left"></i>
   <img className="image" src={newAge} alt="new age update" />
   <i className="fa-solid fa-chevron-right text-end"></i>
   <p className="btn-wrap play-btn">
    <img aria-hidden="true" className="rest-img" src={seeMoreRest} alt="" />
    <img aria-hidden="true" className="hover-img" src={seeMoreHover} alt="" />
    <span className="sr-only">SEE MORE COMMUNITY NEWS</span>
   </p>
  </div>
 );
}
