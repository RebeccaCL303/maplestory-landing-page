import React from "react";
import "./Footer.css";

export default function Footer() {
 return (
  <div className="Footer">
   <p>
    <strong>Disclaimer: </strong>this is a fanamde coding project, I do not own
    any rights or services shown on this page. The official MapleStory website
    can be found
    <a
     href="https://maplestory.nexon.net/"
     rel="noopener noreferrer"
     target="_blank"
     aria-label="open a new tab to the official maplestory website">
     here.
    </a>
   </p>
   <p>
    This project's code is{" "}
    <a
     href="https://github.com/RebeccaCL303/maplestory-landing-page"
     rel="noopener noreferrer"
     target="_blank"
     aria-label="open a new tab to the repository for this site">
     open source
    </a>{" "}
    by
    <a
     href="https://rebeccacl303.github.io/"
     rel="noopener noreferrer"
     target="_blank"
     aria-label="open a new tab to my portfolio">
     Rebecca Leibowitz
    </a>
   </p>
  </div>
 );
}
