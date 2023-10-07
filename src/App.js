import "./App.css";
import Header from "./Header/Header.js";
import CurrentEvents from "./CurrentEvents.js";

function App() {
 return (
  <div className="App">
   <Header />
   <main>
    <CurrentEvents />
   </main>
  </div>
 );
}

export default App;
