import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Import userContext From App.js
import { userContext } from "../App";

const Logout = () => {
  // Initialize State And Dispatch
  const { state, dispatch } = useContext(userContext);

  const nevigate = useNavigate();

  useEffect(() => {
    async function logoutUser(){
        const res = await fetch("/logout", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (res) {
          // Set Dispatch Action Type and Payload is False
          dispatch({ type: "USER", payload: false });
          nevigate("/login");
        }
    }
    logoutUser();
  }, []);

  return (
    <>
      <h1>Logout</h1>
    </>
  );
};

export default Logout;
