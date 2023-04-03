import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Index from "./pages/Index";
import Loading from "./components/Loading";

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
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
