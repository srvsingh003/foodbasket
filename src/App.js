// import logo from './logo.svg';
import "./App.css";
import Benefits from "./Components/Benefits";
import Benefitsofapp from "./Components/Benefitsofapp";
import Food from "./Components/Food";
// import Cart from "./Components/Cart";
import Heroimage from "./Components/Heroimage";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Heroimage />
      <Benefits />
      <Benefitsofapp />
      <Food />
    </div>
  );
}

export default App;
