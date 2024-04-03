// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import logo from "./image/logo.jpg"; // Import the logo image
import l2 from "./image/l2.png";
import cart from "./image/cart.png";
import account from "./image/account.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Convert 'user' to boolean and set isLoggedIn accordingly
  }, []);

  // Handle logout action
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove 'user' from local storage
    setIsLoggedIn(false); // Update isLoggedIn state
  };

  return (
    <div>
      <div>
        <nav className="navbar">
          <div className="logo-container">
            <Link className="category-link" to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
            <span>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
              </div>
            </span>
          </div>
          <div className="navbar-links">
            <img src={account} alt="account" className="account" />
            <Link to="/favorite">
              <img src={l2} alt="like" className="like" />
            </Link>
            <Link className="category-link" to="/cart">
              <img src={cart} alt="cart" className="cart" />
            </Link>
            {isLoggedIn ? ( // If user is logged in, show logout button
              <Link onClick={handleLogout}>Logout</Link>
            ) : (
              // If user is not logged in, show login/signup links
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </div>
        </nav>
      </div>

      <div>
        <nav>
          <div className="navbar-link">
            <span>
              <div className="dropdown">
                <div className="dropbtn">
                  Travel By Country
                  <div className="dropdown-content">
                    <Link className="category-link" to="/india">
                      India
                    </Link>
                    <br />
                    <Link className="category-link" to="/london">
                      London
                    </Link>
                    <br />
                    <Link className="category-link" to="/switzerland">
                      Switzerland
                    </Link>
                    <br />
                    <Link className="category-link" to="/dubai">
                      Dubai
                    </Link>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <Link className="category-link" to="/dubai">
                Gold Package
              </Link>
            </span>
            <span>
              <Link className="category-link" to="/switzerland">
                Diamond Package
              </Link>
            </span>
            <span>
              <Link className="category-link" to="/india">
                Silver Package
              </Link>
            </span>
          </div>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
