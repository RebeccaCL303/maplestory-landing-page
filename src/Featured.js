import React from "react";
import carnival1 from "./images/carnival-event.jpg";

import "./Featured.css";

export default function Featured() {
 return (
  <div className="Featured">
   <h2>FEATURED NEWS AND UPDATES</h2>
   <section className="row">
    <div className="col-6">
     <div className="card">
      <img src={carnival1} alt="news" />
      <h4>event title</h4>
      <p>description</p>
     </div>
    </div>
    <div className="col-6">
     <div className="card">
      <img src={carnival1} alt="news" />
      <h4>event title</h4>
      <p>description</p>
     </div>
    </div>
   </section>
   <section className="row">
    <div className="col">
     <div className="card">
      <img src={carnival1} alt="news" />
      <h4>event title</h4>
      <p>description</p>
     </div>
    </div>
   </section>
   <section className="row">
    <div className="col">
     <div className="card">
      <img src={carnival1} alt="news" />
      <h4>event title</h4>
      <p>description</p>
     </div>
    </div>
   </section>
   <section className="row">
    <div className="col">
     <div className="card">
      <img src={carnival1} alt="news" />
      <h4>event title</h4>
      <p>description</p>
     </div>
    </div>
   </section>
  </div>
 );
}
