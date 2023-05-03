import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PathConstants } from "../constants/path-constants";
import "./index.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    if (window.location.pathname === PathConstants.HOME) {
      setActiveMenu(PathConstants.HOME);
    } else {
      setActiveMenu(window.location.pathname);
    }
  }, [activeMenu]);

  const loginClick = () => {
    window.location.href = "https://dashboard.cuvo.io/";
  };

  const getActiveMenu = () => {
    if (window.location.pathname === PathConstants.HOME) {
      setActiveMenu(PathConstants.HOME);
    } else if (window.location.pathname === PathConstants.ABOUTUS) {
      setActiveMenu(PathConstants.ABOUTUS);
    } else if (window.location.pathname === PathConstants.INDUSTRIES) {
      setActiveMenu(PathConstants.INDUSTRIES);
    } else if (window.location.pathname === PathConstants.ABOUTUS) {
      setActiveMenu(PathConstants.ABOUTUS);
    } else if (window.location.pathname === PathConstants.CONTACT) {
      setActiveMenu(PathConstants.CONTACT);
    } else if (window.location.pathname === PathConstants.PRODUCT) {
      setActiveMenu(PathConstants.PRODUCT);
    } else if (window.location.pathname === PathConstants.PRODUCTPAGE1) {
      setActiveMenu(PathConstants.PRODUCTPAGE1);
    } else if (window.location.pathname === PathConstants.PRODUCTPAGE2) {
      setActiveMenu(PathConstants.PRODUCTPAGE2);
    } else if (window.location.pathname === PathConstants.PRODUCTPAGE3) {
      setActiveMenu(PathConstants.PRODUCTPAGE3);
    } else if (window.location.pathname === PathConstants.INDUSTRIES1) {
      setActiveMenu(PathConstants.INDUSTRIES1);
    } else if (window.location.pathname === PathConstants.INDUSTRIES2) {
      setActiveMenu(PathConstants.INDUSTRIES2);
    }
  };

  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="../assets/cuvo-big-none-blue.png"
              className="navbar-brand-logo-image"
              alt="CuVo logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={() => getActiveMenu()}>
                <Link
                  to={PathConstants.HOME}
                  className={
                    activeMenu === PathConstants.HOME
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown" onClick={() => getActiveMenu()}>
                <Link
                  to={PathConstants.PRODUCT}
                  className={
                    activeMenu === PathConstants.PRODUCT ||
                      activeMenu === PathConstants.PRODUCTPAGE1 ||
                      activeMenu === PathConstants.PRODUCTPAGE2 ||
                      activeMenu === PathConstants.PRODUCTPAGE3
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {" "}
                  Products
                </Link>
                <ul class="dropdown-menu">
                  <li className="dropdown-menu-li">
                    <Link to={PathConstants.PRODUCTPAGE1} className="dropdown-item">
                      <img src="../assets/images/icon/ic_mobile.png" className="header-dropdown-menu-icon"></img>
                      <span className="header-dropdown-menu-text">CuVo Automate</span>
                    </Link>
                  </li>
                  <li className="dropdown-menu-li">
                    <Link to={PathConstants.PRODUCTPAGE2} className="dropdown-item">
                      <img src="../assets/images/icon/ic_mobile.png" className="header-dropdown-menu-icon"></img>
                      <span className="header-dropdown-menu-text">CuVo Unify</span>
                    </Link>
                  </li>
                  <li className="dropdown-menu-li">
                    <Link to={PathConstants.PRODUCTPAGE3} className="dropdown-item">
                      <img src="../assets/images/icon/ic_mobile.png" className="header-dropdown-menu-icon"></img>
                      <span className="header-dropdown-menu-text">CuVo Discover</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown" onClick={() => getActiveMenu()}>
                <a class="nav-link  dropdown-toggle" data-bs-toggle="dropdown"
                  className={
                    activeMenu === PathConstants.INDUSTRIES1 ||
                      activeMenu === PathConstants.INDUSTRIES2
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {" "}
                  Industries
                </a>
                <ul class="dropdown-menu">
                  <li className="dropdown-menu-li">
                    <Link to={PathConstants.INDUSTRIES1} className="dropdown-item">
                      <img src="../assets/images/icon/ic_mobile.png" className="header-dropdown-menu-icon"></img>
                      <span className="header-dropdown-menu-text">Media and Entertainment</span>
                    </Link>
                  </li>
                  <li className="dropdown-menu-li">
                    <Link to={PathConstants.INDUSTRIES2} className="dropdown-item">
                      <img src="../assets/images/icon/ic_mobile.png" className="header-dropdown-menu-icon"></img>
                      <span className="header-dropdown-menu-text">Mobile Applications</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item" onClick={() => getActiveMenu()}>
                <Link
                  to={PathConstants.ABOUTUS}
                  className={
                    activeMenu === PathConstants.ABOUTUS
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
              {/* <li className="nav-item" onClick={() => getActiveMenu()}>
                                <Link to={PathConstants.CONTACT} className={activeMenu === PathConstants.CONTACT ? 'nav-link active' : 'nav-link'}>Contact</Link>
                            </li> */}
            </ul>
            <form className="d-flex">
              <a className="me-2" onClick={loginClick}>
                <button class="btn btn-outline-primary me-1" type="button">
                  Login
                </button>
              </a>
              <Link to={PathConstants.CONTACT}>
                <button className="btn btn-primary" type="button">
                  Request a Demo
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </section >
  );
};

export default Header;
