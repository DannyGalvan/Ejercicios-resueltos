import logo from "./logo.svg";
import "./App.css";
import { ContactList } from "./components/containers/ContactList";

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactList />
      </main>
    </div>
  );
}

export default App;
