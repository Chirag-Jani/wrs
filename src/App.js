import { useState } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Offerings from "./pages/Offerings";
import { fadeIn } from "react-animations";
import { keyframes, styled } from "styled-components";

const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;

function App() {
  const [selectedMenu, setSelectedMenu] = useState();
  return (
    <Router>
      <Navbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <Routes>
        <Route path="/" element={<Home FadeIn={FadeIn} />} />
        <Route
          path="/offerings"
          element={
            <Offerings
              FadeIn={FadeIn}
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
