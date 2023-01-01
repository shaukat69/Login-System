import React, { useEffect, useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const homePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
    homePage();
  }, []);

  return (
    <>
      <div className="home_container">
        <h3 className="text-center">Welcome</h3>
        <h1 className="text-center">{userName}</h1>
        <h2 className="text-center">
          {show ? "Happy To See You back" : "This is Created By Shaukat Ali"}
        </h2>
        {
          show ? "" : <div className="container text-center home_link">
          <div className="text-justify">
            <h4>
              <i class="fa-brands fa-instagram"></i> <a href="https://www.instagram.com/shaukat.ali63/">shaukat.ali63</a>
            </h4>
            <h4>
              <i class="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/shaukat-ali-hamdule/">Shaukat Ali</a>
            </h4>
            <h4><i class="fa-brands fa-github"></i> <a href="https://github.com/shauky6963">shauky6963</a> </h4>
          </div>
        </div>
        }
      </div>
    </>
  );
};

export default Home;
