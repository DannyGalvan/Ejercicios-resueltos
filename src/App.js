import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { ContactList } from "./components/containers/ContactList";

function App() {
  return (
    <div className="container-fluid">
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <ContactList />
      </main>
    </div>
  );
}

export default App;
