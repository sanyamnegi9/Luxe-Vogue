import { Route, Routes } from "react-router-dom";
import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
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
