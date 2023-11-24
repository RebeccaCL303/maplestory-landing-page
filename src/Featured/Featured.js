import React from "react";
import carnival1 from "../images/carnival-event.jpg";
import art from "../images/art-corner.png";

import "./Featured.css";

export default function Featured() {
 return (
  <div className="Featured">
   <div className="featured-wrap">
    <h2>FEATURED NEWS AND UPDATES</h2>
    <div className="row">
     <div className="col-md-6">
      <div className="card card-short">
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
     </div>
     <div className="col-md-6">
      <div className="card card-short">
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
     </div>
    </div>
    <div className="grid">
     <div className="card-long">
      <img src={art} alt="news" />
      <span>
       <h4>Check Out the November 2023 Art Corner</h4>
       <p>Look at this month's roundup of our favorite fan art!</p>
       <p>
        6 Days Ago <span>READ MORE</span>
       </p>
      </span>
     </div>
    </div>
   </div>
   <button className="p-3">
    <strong>SEE MORE NEWS</strong>
   </button>
  </div>
 );
}
