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
       <div className="image">
        <img src={carnival1} alt="news" />
        <div className="label">FEATURED UPDATE</div>
       </div>
       <div className="description">
        <h4>[Updated 10/4] v.245 - Midnight Carnival - Nautilus Patch Notes</h4>
        <p>
         Click here to read the patch notes for v.245 - Midnight Carnival -
         Nautilus.
        </p>
       </div>
       <p className="timestamp">6 Days Ago</p>
       <p className="readmore">READ MORE</p>
      </div>
     </li>
     <li className="col-6">
      <div className="card">
       <div className="image">
        <img src={carnival1} alt="news" />
        <div className="label">FEATURED UPDATE</div>
       </div>
       <div className="description">
        <h4>[Updated 10/4] v.245 - Midnight Carnival - Nautilus Patch Notes</h4>
        <p>
         Click here to read the patch notes for v.245 - Midnight Carnival -
         Nautilus.
        </p>
       </div>
       <p className="timestamp">6 Days Ago</p>
       <p className="readmore">READ MORE</p>
      </div>
     </li>
    </ul>
    <ul className="row">
     <li className="col">
      <div className="card">
       <img src={carnival1} alt="news" />
       <h4>event title</h4>
       <p>description</p>
      </div>
     </li>
    </ul>
   </div>
  </div>
 );
}
