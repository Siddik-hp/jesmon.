import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div id="Login">
      <div className="container-fluid">
        <div className="container mb-3 pt-5">
          <div className="row">
            <div className="col-md-6 left_box text-center p-5 p-md-0 order-0 order-md-2">
              <h1>Hello Friend's.</h1>
              <p>
                To Keep connect with us <br /> Login with your personal info
              </p>
              <Link to="/register">
                <button className="btn">Register</button>
              </Link>
            </div>
            <div className="col-md-6 form_box p-5 p-md-0 order-1 order-md-1">
              <h1>Login into Jexmon.</h1>
              <div className="icon">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-linkedin-in"></i>
              </div>
              <p className="lead">or - Use your email for registation</p>
              <form>
                <div className="form_item">
                  <i class="far fa-envelope-open"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form_item">
                  <i class="fas fa-unlock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>

                <button className="btn">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
