import "./App.css";

import Header from "./Header/Header.js";
import CurrentEvents from "./CurrentEvents/CurrentEvents.js";
import Featured from "./Featured/Featured.js";
import Community from "./Community/Community.js";
import Footer from "./Footer/Footer.js";

function App() {
 return (
  <div className="App">
   <Header />
   <main>
    <CurrentEvents />
    <Featured />
    <Community />
   </main>
   <Footer />
  </div>
 );
}

export default App;
