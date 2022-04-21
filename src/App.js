import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Nav from "./Components/Nav";
import Contact from "./Components/Contact";
// import Home from "./Components/Home";
import Hometwo from "./Components/Hometwo";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Hometwo />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
