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
        <p className="timestamp">6 Days Ago</p>
        <p className="readmore">READ MORE</p>
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
        <p className="timestamp">6 Days Ago</p>
        <p className="readmore">READ MORE</p>
       </div>
      </div>
     </li>
    </ul>
   </div>
  </div>
 );
}
