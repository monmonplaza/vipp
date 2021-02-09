import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import "../Button/Button";
import { Button } from "../Button/Button";

const Nav = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            VIPP
          </Link>
          <ul>
            <li>
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>

            <li>
              <Link to="/" className="nav-links">
                About
              </Link>
            </li>

            <li>
              <Link to="/" className="nav-links">
                Rooms
              </Link>
            </li>
          </ul>
          <Link>
            <Button >Book</Button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Nav;
