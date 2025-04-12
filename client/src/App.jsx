import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
        </Routes>
      </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
