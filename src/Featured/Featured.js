import React from "react";
import blackFriday from "../images/Featured/black-friday.jpg";
import sixthJob from "../images/Featured/6th-job-patch.jpg";
import contests from "../images/Featured/community-contests.jpg";
import maintenance from "../images/Featured/maintenance.jpg";

import "./Featured.css";

export default function Featured() {
 return (
  <div className="Featured">
   <div className="featured-wrap">
    <h2>FEATURED NEWS AND UPDATES</h2>
    <div className="row">
     <div className="col-md-6">
      <div className="card">
       <img src={blackFriday} alt="black friday cash shop event" />
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
      <div className="card">
       <img src={sixthJob} alt="6th job patch notes" />
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
    <div className="row">
     <div className="col-md-6">
      <div className="card">
       <img src={contests} alt="community contests" />
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
      <div className="card">
       <img src={maintenance} alt="game maintenance completed" />
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
   </div>
   <button className="p-3">
    <strong>SEE MORE NEWS</strong>
   </button>
  </div>
 );
}
