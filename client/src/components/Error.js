import React from "react";
import { NavLink } from "react-router-dom";


const Error = () => {
  return (
    <>
      <div className="home_container ">
      <div className="container">
        <h1>WE ARE SORRY, PAGE NOT FOUND!</h1>
        <p>
          THE PAGE YOU ARE LOOKING MIGHT HAVE BEEN REMOVED OR TEMPORARILY
          UNAVAILABLE
        </p>
        <NavLink type="button" className="error_btn" to="/">Back To Home</NavLink>
      </div>
      </div>
    </>
  );
};

export default Error;
