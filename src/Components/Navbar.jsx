import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    const toggleMenu = () => {
      hamburger.classList.toggle("hamActive");
      navMenu.classList.toggle("hamActive");
    };

    const closeMenu = () => {
      hamburger.classList.remove("hamActive");
      navMenu.classList.remove("hamActive");
    };

    if (hamburger) {
      hamburger.addEventListener("click", toggleMenu);
    }

    document.querySelectorAll(".nav-item").forEach((close) => {
      close.addEventListener("click", closeMenu);
    });

    return () => {
      if (hamburger) {
        hamburger.removeEventListener("click", toggleMenu);
      }
      document.querySelectorAll(".nav-item").forEach((close) => {
        close.removeEventListener("click", closeMenu);
      });
    };
  }, []);


  return (
    <>
      <div className="header">
        <div className="logo">
          <span className="verticalText">The</span>
          <h1>Siren</h1>
        </div>
        <nav>
          <ul className="nav-menu">
            <li className="nav-item"><NavLink to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/bollywood">Bollywood</NavLink></li>
            <li className="nav-item"><NavLink to="/hollywood">Hollywood</NavLink></li>
            <li className="nav-item"><NavLink to="/technology">Technology</NavLink></li>
            <li className="nav-item"><NavLink to="/fitness">Fitness</NavLink></li>
            <li className="nav-item"><NavLink to="/food">Food</NavLink></li>
          </ul>

          <div className="hamburger">
           <span className="bar"></span>
           <span className="bar"></span>
           <span className="bar"></span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
