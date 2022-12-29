import React from "react";

const Contact = () => {
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
                  className="form-control"
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
                  className="form-control"
                  aria-label="Last name"
                  id="phone"
                />
              </div>
            </div>

            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input type="password" className="form-control" id="email" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
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
