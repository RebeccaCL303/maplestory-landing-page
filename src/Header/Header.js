import React from "react";

import "./Header.css";

function Header() {
 return (
  <div className="Header">
   <section className="disclaimer">
    <strong>Disclaimer: </strong>this is a coding project, I do not own any
    rights or services shown on this page.
   </section>
   <div className="nav-top"></div>
   <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
    <div className="container-fluid">
     <a className="navbar-brand" href="/">
      🍁Maplestory🍁
     </a>
     <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       <li>News</li>
       <li>The Game</li>
       <li>Community</li>
       <li>Support</li>
       <li>Buy Merch</li>
      </ul>
      <ul className="navbar-nav">
       <li>
        <i className="fa-brands fa-facebook"></i>
       </li>
       <li>
        <i className="fa-brands fa-twitter"></i>
       </li>
       <li>
        <i className="fa-brands fa-youtube"></i>
       </li>
       <li>
        <i className="fa-brands fa-instagram"></i>
       </li>
       <li>
        <i className="fa-brands fa-twitch"></i>
       </li>
       <li>
        <i className="fa-brands fa-discord"></i>
       </li>
       <li>
        <i className="fa-brands fa-tiktok"></i>
       </li>
      </ul>
     </div>
    </div>
   </nav>
   <div className="nav-bottom"></div>
  </div>
 );
}

export default Header;
