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
       <div className="label sale">FEATURED SALE</div>
       <div className="text">
        <h4>Black Friday 2023 Sales!</h4>
        <p>
         Take advantage of dozens of deals with new items on sale every day
         through Cyber Monday!
        </p>
        <div className="card-bottom">
         <p>
          NOV 19, 2023 <span>READ MORE</span>
         </p>
        </div>
       </div>
      </div>
     </div>
     <div className="col-md-6">
      <div className="card">
       <img src={sixthJob} alt="6th job patch notes" />
       <div className="label update">FEATURED UPDATE</div>
       <div className="text">
        <h4>[Updated November 21] v.246 - New Age: 6th Job Patch Notes</h4>
        <p>Click here to read the patch notes for v.246 - New Age: 6th Job.</p>
        <div className="card-bottom">
         <p>
          NOV 14, 2023 <span>READ MORE</span>
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
       <div className="label community">COMMUNITY</div>
       <div className="text">
        <h4>November 2023 Community Contests and Events</h4>
        <p>
         Take a look at the new and upcoming Community Contests below, and be
         prepared to test your imagination!
        </p>
        <div className="card-bottom">
         <p>
          5 DAYS AGO <span>READ MORE</span>
         </p>
        </div>
       </div>
      </div>
     </div>
     <div className="col-md-6">
      <div className="card">
       <img src={maintenance} alt="game maintenance completed" />
       <div className="label maintenance">MAINTENANCE</div>
       <div className="text">
        <h4>[Completed] Scheduled Maintenance - November 21, 2023</h4>
        <p>
         The maintenance has been completed and we have extended Cash Shop items
         for 4 hours. Please restart your Nexon Launcher or Steam to make sure
         that you get the latest client! Thank you for your patience.
        </p>
        <div className="card-bottom">
         <p>
          NOV 19, 2023 <span>READ MORE</span>
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
