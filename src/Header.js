import React from "react";

import "./Header.css";

function Header() {
 return (
  <header class="fixed-top">
   <section class="disclaimer">
    <strong>Disclaimer: </strong>this is a coding project, I do not own any
    rights or services shown on this page.
   </section>
   <div class="nav-top"></div>
   <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
    <div class="container-fluid">
     <a class="navbar-brand" href="#">
      🍁Maplestory🍁
     </a>
     <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="primary-header">
       <li>News</li>
       <li>The Game</li>
       <li>Community</li>
       <li>Support</li>
       <li>Buy Merch</li>
      </ul>
      <ul class="social-header">
       <li>
        <i class="fa-brands fa-facebook"></i>
       </li>
       <li>
        <i class="fa-brands fa-twitter"></i>
       </li>
       <li>
        <i class="fa-brands fa-youtube"></i>
       </li>
       <li>
        <i class="fa-brands fa-instagram"></i>
       </li>
       <li>
        <i class="fa-brands fa-twitch"></i>
       </li>
       <li>
        <i class="fa-brands fa-discord"></i>
       </li>
       <li>
        <i class="fa-brands fa-tiktok"></i>
       </li>
      </ul>
     </div>
     <button>
      <strong>PLAY FREE NOW</strong>
      <br />
      ON YOUR PC
     </button>
    </div>
   </nav>
   <div class="nav-bottom"></div>
  </header>
 );
}

export default Header;
