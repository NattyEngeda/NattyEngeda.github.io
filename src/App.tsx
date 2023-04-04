import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Index from "./pages/Index";
import Loading from "./components/Loading";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return isLoading ? (
    <Loading type={"bars"} color={"white"} />
  ) : (
    <>
      <Router>
        <Header />
        <main
          className="min-h-screen"
          style={{
            backgroundImage: `URL(
              "https://images.nationalgeographic.org/image/upload/v1638892272/EducationHub/photos/hoh-river-valley.jpg"
            )`,
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
