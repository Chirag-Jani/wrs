import { useState } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Offerings from "./pages/Offerings";

function App() {
  const [selectedMenu, setSelectedMenu] = useState();
  return (
    <Router>
      <Navbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/offerings"
          element={<Offerings setSelectedMenu={setSelectedMenu} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
