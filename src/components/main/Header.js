import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <h1>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </h1>
          <div className="navRight">
            <Link to="/">
              <img src="/images/bell-50.png" alt="bell" />
            </Link>
            <Link to="/">
              <img src="/images/user-50.png" alt="user" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;