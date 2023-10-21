import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";
import { Home, About, Contact } from "./Pages";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarTwo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
