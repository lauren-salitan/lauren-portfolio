import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';     // (stub for now)
import Contact from './pages/Contact.jsx'; // (stub for now)
import { useState, useEffect } from "react";

export default function App() {
    const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1100); // 1.1 sec
    return () => clearTimeout(t);
  }, []);

  if (showSplash) {
    return (
      <div style={{
        height: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "var(--clr-bg)", color: "var(--clr-accent)", fontSize: "2.5rem", fontWeight: 800,
        letterSpacing: "-0.03em", zIndex: 99
      }}>
        {/* Lauren Salitan */}
      </div>
    );
  }
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}