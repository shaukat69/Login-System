import React, { useEffect, useState } from "react";

const Contact = () => {

  const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});
  

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();

      setUserData({...userData, name:data.name, email:data.email, phone:data.phone});

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userContact()
  }, []);

  // Store Data In State 
  const handleInputs = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]:value});
  }

  return (
    <>
      <div className="container mb-3 py-3">
        <h1 className="text-center">Contact Us</h1>

        <div className="container">
          <form>
            <div className="row mb-3">
              <div className="col">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control" name="name" value={userData.name} onChange={handleInputs}
                  aria-label="First name"
                  id="name"
                />
              </div>
              <div className="col">
                <label for="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control" name="phone" value={userData.phone} onChange={handleInputs}
                  aria-label="Last name"
                  id="phone"
                />
              </div>
            </div>

            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" name="email" value={userData.email} onChange={handleInputs} id="email" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                name="message" value={userData.message} onChange={handleInputs}
              ></textarea>
            </div>

            <div className="d-grid mt-4 gap-2">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
