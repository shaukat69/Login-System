import React, { useState } from "react";

const Signup = () => {
  // Get Data From User And Store It In A State
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    // Put All The Data In State
    setUser({ ...user, [name]: value });
  };

  // Send All The Data To Backend
  const PostData = async (e) => {
    e.preventDefault();

    // Get All Data From The State
    const { name, email, phone, work, password, cpassword } = user;

    // Send All Data To Backend Using Fetch API
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    // Validation
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      work === "" ||
      password === "" ||
      cpassword === ""
    ) {
      alert("Please Fill All The Fields Properly!");
    } else if (res.status === 422) {
      alert("Email Already Exists!");
    } else if (res.status === 400) {
      alert("Passwords Are Not Matching!");
    } else {
      alert("Registration Successful");
    }
  };

  return (
    <>
      <div className="container py-3">
        <h1 className="text-center my-3">Registration Form</h1>

        <div className="container">
          <form method="Post">
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="First name"
                  id="name"
                  onChange={handleInputs}
                  value={user.name}
                  name="name"
                />
              </div>
              <div className="col">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Last name"
                  id="phone"
                  onChange={handleInputs}
                  value={user.phone}
                  name="phone"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleInputs}
                value={user.email}
                name="email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="work" className="form-label">
                Work
              </label>
              <input
                type="text"
                className="form-control"
                id="work"
                onChange={handleInputs}
                value={user.work}
                name="work"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={handleInputs}
                value={user.password}
                name="password"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                onChange={handleInputs}
                value={user.cpassword}
                name="cpassword"
              />
            </div>

            <div className="d-grid mt-4 gap-2">
              <button
                className="btn btn-primary"
                onClick={PostData}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
