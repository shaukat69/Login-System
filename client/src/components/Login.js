import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const nevigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if(email==="" || password===""){
      alert("Please Fill All The Fields Properly!");
    }else if(res.status === 400 || !data){
      alert("Invalid Credentials!");
    }else{
      alert("Login Successfully");
      nevigate('/');
    }

  }


  return (
    <>
      <div className="container py-3">
        <h1 className="text-center my-3">Registration Form</h1>

        <div className="container">
          <form>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="d-grid mt-4 gap-2">
              <button className="btn btn-primary" type="submit" onClick={loginUser}>
                Submit
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Login;
