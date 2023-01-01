import React, { useEffect, useState } from "react";

const Home = () => {

  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const homePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();

      setUserName(data.name);
      setShow(true);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    homePage()
  }, []);

  return (
    <>
      <div className="home_container">
        <h3 className="text-center">Welcome</h3>
        <h1 className="text-center">{userName}</h1>
        <h2 className="text-center">{show ? 'Happy To See You back' : "This is Created By Shauky!"}</h2>
      </div>
    </>
  );
};

export default Home;
