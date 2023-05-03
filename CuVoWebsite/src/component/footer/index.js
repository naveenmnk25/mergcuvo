import React from "react";
import { Link } from "react-router-dom";
import { PathConstants } from "../constants/path-constants";
import "./index.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container py-5 px-5">
        <div className="row mx-5 py-2">
          <div className="col">
            <a href="/">
              <img
                src="../assets/cuvo-big-none-blue.png"
                alt="CuVo logo"
                className="navbar-brand-logo-image"
              />
            </a>
          </div>
          <div className="col my-sm-0">
            <ul className="list-unstyled">
              <li className="mt-0 mb-3 parent">Company</li>
              <li><Link to={PathConstants.ABOUTUS}>Team</Link></li>
              <li><Link to={PathConstants.CONTACT}>Book a Demo</Link></li>
              <li><Link to={"https://dashboard.cuvo.io/sign-up"}>Get Started</Link></li>
            </ul>
          </div>
          <div className="col my-sm-0">
            <ul className="list-unstyled">
              <li className="mt-0 mb-3 parent">Product</li>
              <li><Link to={PathConstants.PRODUCTPAGE1}>CuVo Automate</Link></li>
              <li><Link to={PathConstants.PRODUCTPAGE2}>CuVo Unify</Link></li>
              <li><Link to={PathConstants.PRODUCTPAGE3}>CuVo Discover</Link></li>
            </ul>
          </div>
          <div className="col my-sm-0">
            <ul className="list-unstyled">
              <li className="mt-0 mb-3 parent">Industries</li>
              <li><Link to={PathConstants.INDUSTRIES1}>Media & Entertainment</Link></li>
              <li><Link to={PathConstants.INDUSTRIES2}>Mobile Applications</Link></li>
            </ul>
          </div>
          <div className="col  my-sm-0 mt-5">
            <ul className="list-unstyled">
              <li className="mt-0 mb-3 parent">Resources</li>
              <li><Link to={PathConstants.BLOGLIST}>Case Studies & Articles</Link></li>
              <li><Link to={PathConstants.BLOGLIST}>NewsLetter</Link></li>
              <li><Link to={PathConstants.BLOGLIST}>Press Release</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container py-4 px-0">
            <div className="row">
              <div className="col-sm-6 col-auto">
                <small>
                  &#9400; Copyright © 2021-2023 CuVo Inc. | Terms Conditions |
                  Privacy Policy
                </small>
              </div>
              <div className="col-sm-6 text-md-end text-end media-icons">
                <span>
                  <a
                    href="https://www.youtube.com/@cuvo-info"
                    target={"_blank"}
                  >
                    <img
                      src="../assets/Icons/Footer/ic_youtube 1.png"
                      className="img-fluid"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                </span>
                <span>
                  <a href="https://twitter.com/cuvoinfo" target={"_blank"}>
                    <img
                      src="../assets/Icons/Footer/ic_twitter 1.png"
                      className="img-fluid"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/company/customersvoice/"
                    target="_blank"
                  >
                    <img
                      src="../assets/Icons/Footer/ic_linkedin 1.png"
                      className="img-fluid"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                </span>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Footer;
