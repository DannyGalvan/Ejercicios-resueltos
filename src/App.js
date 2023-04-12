import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/pure/Clock";
import ClockFunctional from "./components/pure/ClockFunctional";

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock/>
        <ClockFunctional/>
      </main>
    </div>
  );
}

export default App;
