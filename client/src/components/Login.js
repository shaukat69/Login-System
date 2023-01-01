import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Import userContext From App.js
import { userContext } from "../App";

const Login = () => {
  // Initialize State And Dispatch
  const { state, dispatch } = useContext(userContext);

  const nevigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!email, !password ) {
      alert("Please Fill All The Fields Properly!");
    } else if (res.status === 400 || !data) {
      alert("Invalid Credentials!");
    } else {
      // Set Dispatch Action Type and Payload True
      dispatch({ type: "USER", payload: true });
      alert("Login Successfully");
      nevigate("/");
    }
  };

  return (
    <>
      <div className="form_container vh-100">
        <div class="container form_card">
          <h1 className="text-center">Login Form</h1>

          <div className="container">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                <i class="fa-sharp fa-solid fa-envelope"></i> Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                <i class="fa-sharp fa-solid fa-lock"></i> Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-grid mt-4 gap-2">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={loginUser}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
