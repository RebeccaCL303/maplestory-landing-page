import "./App.css";
import Header from "./Header/Header.js";
import CurrentEvents from "./CurrentEvents/CurrentEvents.js";
import Featured from "./Featured/Featured.js";
import Community from "./Community/Community.js";

function App() {
 return (
  <div className="App">
   <Header />
   <main>
    <CurrentEvents />
    <Featured />
    <Community />
   </main>
  </div>
 );
}

export default App;
