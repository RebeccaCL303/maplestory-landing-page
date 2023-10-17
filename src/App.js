import "./App.css";
import Header from "./Header/Header.js";
import CurrentEvents from "./CurrentEvents/CurrentEvents.js";
import Featured from "./Featured/Featured.js";

function App() {
 return (
  <div className="App">
   <Header />
   <main>
    <CurrentEvents />
    <button className="p-3">
     <strong>PLAY MAPLESTORY NOW</strong>
    </button>
    <Featured />
   </main>
  </div>
 );
}

export default App;
