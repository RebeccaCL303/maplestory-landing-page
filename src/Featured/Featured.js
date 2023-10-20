import React from "react";
import carnival1 from "../images/carnival-event.jpg";

import "./Featured.css";

export default function Featured() {
 return (
  <div className="Featured">
   <div className="featured-wrap">
    <h2>FEATURED NEWS AND UPDATES</h2>
    <ul className="row">
     <li className="col-6">
      <div className="card">
       <img src={carnival1} alt="news" />
       <div className="label">FEATURED UPDATE</div>
       <div className="text">
        <h4>[Updated 10/4] v.245 - Midnight Carnival - Nautilus Patch Notes</h4>
        <p>
         Click here to read the patch notes for v.245 - Midnight Carnival -
         Nautilus.
        </p>
        <div className="card-bottom">
         <p>
          6 Days Ago <span>READ MORE</span>
         </p>
        </div>
       </div>
      </div>
     </li>
     <li className="col-6">
      <div className="card">
       <img src={carnival1} alt="news" />
       <div className="label">FEATURED UPDATE</div>
       <div className="text">
        <h4>[Updated 10/4] v.245 - Midnight Carnival - Nautilus Patch Notes</h4>
        <p>
         Click here to read the patch notes for v.245 - Midnight Carnival -
         Nautilus.
        </p>
        <div className="card-bottom">
         <p>
          6 Days Ago <span>READ MORE</span>
         </p>
        </div>
       </div>
      </div>
     </li>
    </ul>
    <ul className="row">
     <li className="col-12">
      <div className="news">
       <div className="image">
        <img src={carnival1} alt="news" className="img-fluid" />
        <span className="label">EVENT</span>
       </div>
       <div className="text">
        <h4>Community Livestream - Sixth Star Showdown w/ Team Pepe!</h4>
        <p>
         Join Community Manager Ezrabell alongside Team Pepe from the Sixth Star
         Showdown event in a Community Livestream!
        </p>
        <div className="news-bottom">
         <p>
          6 Days Ago <span>READ MORE</span>
         </p>
        </div>
       </div>
      </div>
     </li>
     <li className="col-12">
      <div className="news">
       <div className="image">
        <img src={carnival1} alt="news" className="img-fluid" />
        <span className="label">EVENT</span>
       </div>
       <div className="text">
        <h4>Community Livestream - Sixth Star Showdown w/ Team Pepe!</h4>
        <p>
         Join Community Manager Ezrabell alongside Team Pepe from the Sixth Star
         Showdown event in a Community Livestream!
        </p>
        <div className="news-bottom">
         <p>
          6 Days Ago <span>READ MORE</span>
         </p>
        </div>
       </div>
      </div>
     </li>
    </ul>
   </div>
  </div>
 );
}
