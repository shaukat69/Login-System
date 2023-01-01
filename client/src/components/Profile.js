import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const nevigate = useNavigate();
  const [userData, setUserData] = useState({});

  const profilePage = async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      nevigate("/login");
    }
  };

  useEffect(() => {
    profilePage();
  }, []);

  return (
    <>
      <div className="profile_container">
        <div class="container form_card">
          <h1 className="text-center my-3 pb-5">My Profile</h1>
          <div className="container">
            <form method="GET">
              <div className="row mb-3">
                <div className="col">
                  Id: <h4>{userData._id}</h4>
                </div>
                <div className="col">
                  Name: <h4>{userData.name}</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  Phone: <h4>{userData.phone}</h4>
                </div>

                <div className="col">
                  Email: <h4>{userData.email}</h4>
                </div>
              </div>

              <div className="mb-3">
                Work: <h4>{userData.work}</h4>
              </div>

              <div className="mb-3">
                Hobbies:
                <h4>
                  Cricket, Football, Programming, Learning, Singing, Dancing
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
