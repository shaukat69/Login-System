import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import "./App.css"

// Import Reducer 
import { initialState, reducer } from "./reducer/UseReducer";

// React Router
import {
  Routes,
  Route
} from "react-router-dom";

// Context API 
export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <userContext.Provider value={{state, dispatch}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route element={<Error />} /> */}
      </Routes>
      <Footer/>
    </userContext.Provider>
    </>
  );
}

export default App;
