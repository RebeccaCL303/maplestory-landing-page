import React from "react";
import "./Community.css";
import art from "../images/art-corner.png";

export default function Community() {
 return (
  <div className="Community">
   <div className="community-wrap">
    <h2>COMMUNITY NEWS</h2>
    <div className="community-grid">
     <div className="grid-item">
      <span>
       <img src={art} alt="art corner" />
      </span>
      <span>
       <h4>Check Out the November 2023 Art Corner</h4>
       <p>Look at this month's roundup of our favorite fan art!</p>
       <p>
        6 Days Ago <span>READ MORE</span>
       </p>
      </span>
     </div>
     <div className="grid-item">
      <span>
       <img src={art} alt="art corner" />
      </span>
      <span>
       <h4>Check Out the November 2023 Art Corner</h4>
       <p>Look at this month's roundup of our favorite fan art!</p>
       <p>
        6 Days Ago <span>READ MORE</span>
       </p>
      </span>
     </div>
    </div>
    <button>
     SEE MORE
     <br />
     COMMUNITY NEWS
    </button>
   </div>
  </div>
 );
}
