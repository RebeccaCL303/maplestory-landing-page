import React from "react";
import "./Community.css";

import communityContest from "../images/Featured/community-contests.jpg";
import livestream from "../images/Community/livestream-news.png";
import yourMaplestory from "../images/Community/your-maplestory.jpg";
import artCorner from "../images/Community/art-corner.jpg";

export default function Community() {
 return (
  <div className="Community">
   <div className="community-wrap">
    <h2>COMMUNITY NEWS</h2>
    <div className="community-grid">
     <div className="grid-item">
      <span className="photo">
       <img src={communityContest} alt="community contests 2023" />
      </span>
      <span className="text">
       <h4>November 2023 Contests and Events</h4>
       <p>
        Take a look at the new and upcoming Community Contests below, and be
        pre...
       </p>
       <p>
        5 DAYS AGO <span>READ MORE</span>
       </p>
      </span>
     </div>
     <div className="grid-item">
      <span className="photo">
       <img
        src={livestream}
        alt="pink bean sitting at a desk with dual monitors"
       />
      </span>
      <span className="text">
       <h4>Community Livestream - Let's Play Hyp...</h4>
       <p>
        Join Community Manager Jade in the next Community Livestream as she
        expl...
       </p>
       <p>
        NOV 16, 2023 <span>READ MORE</span>
       </p>
      </span>
     </div>
     <div className="grid-item">
      <span className="photo">
       <img src={yourMaplestory} alt="characters gathered around a scrapbook" />
      </span>
      <span className="text">
       <h4>What's Your MapleStory? - Skywired</h4>
       <p>
        We take a look at some of the great stories that our players have had
        wi...
       </p>
       <p>
        NOV 10, 2023 <span>READ MORE</span>
       </p>
      </span>
     </div>
     <div className="grid-item">
      <span className="photo">
       <img
        src={livestream}
        alt="pink bean sitting at a desk with dual monitors"
       />
      </span>
      <span className="text">
       <h4>Community Livestream - v.246 Update P...</h4>
       <p>
        Join Community Manager Veeraah and some special guests in the next
        Commu...
       </p>
       <p>
        NOV 09, 2023 <span>READ MORE</span>
       </p>
      </span>
     </div>

     <div className="grid-item">
      <span className="photo">
       <img
        src={livestream}
        alt="pink bean sitting at a desk with dual monitors"
       />
      </span>
      <span className="text">
       <h4>Community Livestream - Sixth Star Sho...</h4>
       <p>
        Join Community Manager Veeraah and some special guests in the next
        Commu...
       </p>
       <p>
        NOV 08, 2023 <span>READ MORE</span>
       </p>
      </span>
     </div>
     <div className="grid-item">
      <span className="photo">
       <img src={artCorner} alt="pink bean holding a paintbrush" />
      </span>
      <span className="text">
       <h4>Check Out the November 2023 Art Corner</h4>
       <p>Look at this month's roundup of our favorite fan art!</p>
       <p>
        NOV 03, 2023 <span>READ MORE</span>
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
