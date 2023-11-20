import React from "react";
import carnival1 from "../images/carnival-event.jpg";

import "./Featured.css";

export default function Featured() {
 return (
  <div className="Featured">
   <div className="featured-wrap">
    <h2>FEATURED NEWS AND UPDATES</h2>
    <section>
     <div className="card card-sm">
      <img src={carnival1} alt="news" />
      <div className="label">FEATURED UPDATE</div>
      <div className="text">
       <h4>[Updated 10/4] v.245 - Midnight Carnival - Nautilus Patch Notes</h4>
       <p>
        Cspanck here to read the patch notes for v.245 - Midnight Carnival -
        Nautilus.
       </p>
       <div className="card-sm-bottom">
        <p>
         6 Days Ago <span>READ MORE</span>
        </p>
       </div>
      </div>
     </div>
     <div className="card card-sm">
      <img src={carnival1} alt="news" />
      <div className="label">FEATURED UPDATE</div>
      <div className="text">
       <h4>[Updated 10/4] v.245 - Midnight Carnival - Nautilus Patch Notes</h4>
       <p>
        Cspanck here to read the patch notes for v.245 - Midnight Carnival -
        Nautilus.
       </p>
       <div className="card-sm-bottom">
        <p>
         6 Days Ago <span>READ MORE</span>
        </p>
       </div>
      </div>
     </div>
    </section>
    <section>
     <div className="card card-lg">
      <div className="image">
       <img src={carnival1} alt="news" className="img-fluid" />
       <span className="label">EVENT</span>
      </div>
      <div className="text">
       <h4>Community livestream - Sixth Star Showdown w/ Team Pepe!</h4>
       <p>
        Join Community Manager Ezrabell alongside Team Pepe from the Sixth Star
        Showdown event in a Community livestream!
       </p>
       <div className="card-lg-bottom">
        <p>
         6 Days Ago <span>READ MORE</span>
        </p>
       </div>
      </div>
     </div>
     <div className="card card-lg">
      <div className="image">
       <img src={carnival1} alt="news" className="img-fluid" />
       <span className="label">EVENT</span>
      </div>
      <div className="text">
       <h4>Community livestream - Sixth Star Showdown w/ Team Pepe!</h4>
       <p>
        Join Community Manager Ezrabell alongside Team Pepe from the Sixth Star
        Showdown event in a Community livestream!
       </p>
       <div className="card-lg-bottom">
        <p>
         6 Days Ago <span>READ MORE</span>
        </p>
       </div>
      </div>
     </div>
    </section>
   </div>
   <button className="p-3">
    <strong>SEE MORE NEWS</strong>
   </button>
  </div>
 );
}
