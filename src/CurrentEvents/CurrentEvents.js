import React from "react";

import carnival from "../images/carnival-event.jpg";
import sixStar from "../images/6th-star.jpg";
import "./CurrentEvents.css";

export default function CurrentEvents() {
 const imgGallery = document.getElementById("img-gallery");
 const image = document.querySelectorAll("image");

 const images = [
  {
   src: carnival,
   alt: "nautilus carnival event",
  },
  {
   src: sixStar,
   alt: "6th star event",
  },
 ];

 function getWidth() {
  const imgWidth = image.offsetWidth;
  return imgWidth;
 }

 function scrollLeft() {
  imgGallery.scrollLeft += getWidth();
 }

 function scrollRight() {
  imgGallery.scrollRight += getWidth();
 }

 return (
  <div className="CurrentEvents">
   <i onClick={scrollLeft} className="fa-solid fa-chevron-left"></i>
   <ul id="img-gallery">
    {images.map(function (image, index) {
     return (
      <li key={index} className="image" onLoad={getWidth}>
       <img src={image.src} alt={image.alt} />
      </li>
     );
    })}
   </ul>
   <i onClick={scrollRight} className="fa-solid fa-chevron-right text-end"></i>
  </div>
 );
}
