import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactus from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contactus />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
