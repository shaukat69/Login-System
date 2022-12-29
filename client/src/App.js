import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import "./App.css"

// React Router
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
