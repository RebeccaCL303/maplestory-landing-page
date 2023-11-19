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
    <Featured />
   </main>
  </div>
 );
}

export default App;
