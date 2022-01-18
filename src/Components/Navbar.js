import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  // Nav Toggle for mobile devices
  function navToggle() {
    const icon = document.querySelector(".fa-bars");
    const icon2 = document.querySelector(".fa-times");
    icon.style.display = "none";
    icon2.style.display = "block";
    const nav = document.querySelector("ul");
    nav.style.left = "0";
  }

  function navToggleHide() {
    const icon = document.querySelector(".fa-bars");
    const icon2 = document.querySelector(".fa-times");
    icon.style.display = "block";
    icon2.style.display = "none";
    const nav = document.querySelector("ul");
    nav.style.left = "-100%";
  }

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".container-fluid");
    navbar.classList.toggle("sticky", window.scrollY > 100);
  });

  return (
    <>
      <section id="Navbar" className="">
        <div className="container-fluid">
          <div className="logo">
            <h2>
              <Link to="/">Jexmon.</Link>
            </h2>
          </div>
          <ul className="toggle_ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#About">About</a>
            </li>
            <li>
              <a href="/#Services">Services</a>
            </li>
            <li>
              <a href="/#Contact">Contact</a>
            </li>
            <li>
              <a href="/#Team">Team</a>
            </li>

            <div className="btn_box">
              <button>
                <Link to="/login">Login</Link>
              </button>
              <button>
                <Link to="/register">Sign up</Link>
              </button>
            </div>
          </ul>
          <div className="icon">
            <i class="fas fa-bars" onClick={navToggle}></i>
            <i class="fas fa-times" onClick={navToggleHide}></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
