import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import Offerings from "./pages/Offerings";
import Pricing from "./pages/Pricing";

import { fadeIn } from "react-animations";
import { keyframes, styled } from "styled-components";

const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage FadeIn={FadeIn} />} />
        <Route path="/offerings" element={<Offerings FadeIn={FadeIn} />} />
        <Route path="/pricing" element={<Pricing FadeIn={FadeIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
