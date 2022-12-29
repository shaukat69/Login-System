import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container py-3">
        <h1 className="text-center my-3">My Profile</h1>

        <div className="container">
          <form>
            <div class="row mb-3">
              <div class="col">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="First name"
                  id="name"
                />
              </div>
              <div class="col">
                <label for="phone" class="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Last name"
                  id="phone"
                />
              </div>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input type="password" class="form-control" id="email" />
            </div>

            <div class="mb-3">
              <label for="work" class="form-label">
                Work
              </label>
              <input type="password" class="form-control" id="work" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                value="Cricket
                Football
                Programming
                Learning
                Singing"
              ></textarea>
            </div>

            <div class="mb-3">
              <label for="cpassword" class="form-label">
                Confirm Password
              </label>
              <input type="password" class="form-control" id="cpassword" />
            </div>

            <div class="d-grid mt-4 gap-2">
              <button class="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
