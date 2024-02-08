import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import Offerings from "./pages/Offerings";
import Pricing from "./pages/Pricing";

import { fadeIn } from "react-animations";
import { keyframes, styled } from "styled-components";
import UnderConstructionPage from "./pages/UnderConstructionPage";
import OurServices from "./pages/OurServices";
// import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage FadeIn={FadeIn} />} />
        <Route path="/offerings" element={<Offerings FadeIn={FadeIn} />} />
        <Route path="/pricing" element={<Pricing FadeIn={FadeIn} />} />
        <Route
          path="/pricing/our-services"
          element={<OurServices FadeIn={FadeIn} />}
        />
        <Route
          path="/about-us"
          element={<UnderConstructionPage FadeIn={FadeIn} />}
        />
        <Route
          path="/appointments"
          element={<UnderConstructionPage FadeIn={FadeIn} />}
        />
        <Route
          path="/contact-us"
          element={<UnderConstructionPage FadeIn={FadeIn} />}
        />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
