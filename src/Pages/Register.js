import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  return (
    <div id="register">
      <ToastContainer />
      <div className="container-fluid">
        <div className="container mb-3">
          <div className="row">

            <div className="col-md-6 left_box text-center p-5 p-md-0">
              <h1>Hello Friend's</h1>
              <p>
                To Keep connect with us <br /> Login with your personal info
              </p>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            </div>
            <div className="col-md-6 form_box p-5 p-md-0">
              <h1>Create Account</h1>
              <div className="icon">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-linkedin-in"></i>
              </div>
              <p className="lead">or - Use your email for registation</p>
              <form>
                <div className="form_item">
                  <i class="far fa-user"></i>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form_item">
                  <i class="far fa-envelope-open"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form_item">
                  <i class="fas fa-unlock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <div className="form_item">
                  <i class="fas fa-unlock-alt"></i>
                  <input type="password" placeholder="Confirm Password" />
                </div>
                <button className="btn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
