import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import { Home, About, Contact } from "./Pages";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
