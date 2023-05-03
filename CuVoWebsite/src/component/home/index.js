import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogSectionCommon from "../blogs/blog-section-common";
import BookDemo from "../book-demo";
import { PathConstants } from "../constants/path-constants";
import $ from "jquery";
import "./index.css";

const HomePage = () => {
  const getStartedClick = () => {
    window.location.href = "https://dashboard.cuvo.io/sign-up";
  };

  const playVideo = () => {
    var vid = document.getElementById("myVideo");
    vid.play();
  };

  const playSecondVideo = () => {
    var vid = document.getElementById("secondVideo");
    vid.play();
  };

  const closeVideo = () => {
    var vid = document.getElementById("myVideo");
    vid.pause();
  };

  const closeSecondVideo = () => {
    var vid = document.getElementById("secondVideo");
    vid.pause();
  };
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // console.log("window.pageYOffset", window.pageYOffset);
    // if (window.pageYOffset > 820 && window.pageYOffset < 1000) {
    //   setIsSticky(true);
    // } else {
    //   setIsSticky(false);
    // }
  };
  return (
    <div>
      <section className="banner home-page-banner">
        <div className="container">
          <div className="row child1 align-items-center px-4">
            <div className="col-12 col-md-6 px-md-0 order-md-first order-last cus_voice">
              <h1>Give your customers a voice</h1>
              <p className="mt-5">
                Transform consumer engagement with a 360 degree perspective
              </p>
              <button
                className="btn btn-primary mt-5"
                type="submit"
                onClick={getStartedClick}
              >
                Get Started
              </button>
            </div>
            <div className="col-12 col-md-6  text-center px-md-0 order-first ordermd-last play">
              <img
                className="img-fluid first-home-video"
                src="../assets/video_icon.png"
                alt="Video Icon"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={playVideo}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="secondPage">
        <div className="container">
          <div className="">
            <div className="row">
              <div className="col-12 px-lg-0 px-3">
                <h1>Connect with your users</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-lg-8 col-12 px-lg-0 px-3">
                <p className="subtext">
                  CuVo is a consumer platform for products to collect live
                  feedback in-app and improve user engagement
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5 px-md-0 ">
                <div className="d-flex flex-column">
                  <div className="reasons align-items-center px-4">
                    <div className="row ">
                      <div className="col-lg-2 engage-text-image">
                        <img
                          className="img-fluid"
                          src="../assets/ic_two_waypng.png"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-10 engage-text">
                        <strong>Engage in two way communication</strong>
                        <p>
                          Gather live feedback from your users while they are
                          immersed in the experience and respond in real-time
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="reasons align-items-center px-4">
                    <div className="row ">
                      <div className="col-lg-2">
                        <img
                          className="img-fluid"
                          src="../assets/smart-tv_1.png"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-10">
                        <strong>Meet your consumers where they are</strong>
                        <p>
                          CuVo is available today on Amazon Fire TV, Roku,
                          Samsung, Apple TV, ChromeCast, LG, Vizio, browsers,
                          iOS, and Android
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="reasons align-items-center px-4">
                    <div className="row ">
                      <div className="col-lg-2">
                        <img
                          className="img-fluid"
                          src="../assets/artificial-intelligence_1.png"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-10">
                        <strong>Get insight with Consumer 360</strong>
                        <p>
                          Generative AI leveraged to automate quality responses
                          that are intelligent and reduce churn
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ImgSticky" className="col-12 col-lg-6 col-md-6 px-0 img-div mx-auto">
                <div className={isSticky ? 'stickyDiv' : ''}>
                  <div className="position-relative">
                    <img
                      className="img-1"
                      src="../assets/Rectangle 2.png"
                      alt=""
                    />
                    <img
                      src="../assets/Group 2498 (2).png"
                      alt=""
                      className="img-2 second-video-image"
                      onClick={playSecondVideo}
                      data-bs-toggle="modal"
                      data-bs-target="#secondVideoModal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="heading">
        <div className="container">
          <div className="">
            <div className="row">
              <div className="col-12 px-md-0 px-3 text-center">
                <h1>Improve Consumer Satisfaction</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 px-0 text-center">
                <p className="subtext">
                  Create actionable steps to improve your product
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12 px-md-5 py-4">
                <div className="right-border">
                  <p className="sub-heading">CUT COSTS BY</p>
                  {/* <p className="number1">30%</p> */}
                  <img
                    src="../assets/images/icon/30_.png"
                    className="number1 num-per-svg"
                  />

                  <p className="description">
                    Save 30% on product development costs
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12 px-md-5 py-4">
                <div className="right-border">
                  <p className="sub-heading">IMPROVE CONSUMER RETENTION BY</p>
                  {/* <p className="number2">70%</p> */}
                  <img
                    src="../assets/images/icon/70_.png"
                    className="number2 num-per-svg"
                  />
                  <p className="description">
                    70% higher 90 day retention rate
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12 px-md-5 py-4 txt-md-c">
                <div>
                  <p className="sub-heading">
                    INCREASE USABILITY OF FEEDBACK BY
                  </p>
                  {/* <p className="number3">200%</p> */}
                  <img
                    src="../assets/images/icon/200_.png"
                    className="number3 num-per-svg"
                  />
                  <p className="description">
                    2X increase in actionable, relevant and timely feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="px-55-66">
          <div className="py-68-87">
            <div className="row ">
              <div className="col-12 px-0 text-center">
                <h1 className="text-white text-center heading">Products</h1>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                <div className="tab-vertical row">
                  <ul
                    className="nav nav-tabs col-md-3 col-12 p-0"
                    id="myTab3"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-vertical-tab"
                        data-toggle="tab"
                        href="#home-vertical"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        CuVo Automate
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-vertical-tab"
                        data-toggle="tab"
                        href="#profile-vertical"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        CuVO Unify
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-vertical-tab"
                        data-toggle="tab"
                        href="#contact-vertical"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        CuVo Discover
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-content col-md-9 col-12"
                    id="myTabContent3"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="home-vertical"
                      role="tabpanel"
                      aria-labelledby="home-vertical-tab"
                    >
                      <div className="customers meet-customer-cuvo ps-4">
                        <h1>Meet your consumers where they are</h1>
                        <p className="desc">
                          Cuvo can be deployed on any device and platform,
                          ensuring that your consumers voice is heard.
                        </p>
                      </div>
                      <Link to={PathConstants.PRODUCTPAGE1}>
                        <div className="row mt-3">
                          <div className="col-lg-4 col-md-4 col-12 ">
                            <div className="right-border p-md-4">
                              <div className="row">
                                <div className="col-3 col-md-12 col-lg-12">
                                  <img
                                    src="../assets/images/icon/ic_mobile.png"
                                    alt=""
                                    className="img-fluid img-fluid-image-50"
                                  />
                                </div>
                                <div className="col-8 col-md-12 col-lg-12">
                                  <h5>Mobile App</h5>
                                  <p className="productDesc">
                                    Supports iOS and Android
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12 ">
                            <div className="right-border p-md-4">
                              <div className="row">
                                <div className="col-3 col-md-12 col-lg-12">
                                  <img
                                    src="../assets/image 48.png"
                                    alt=""
                                    className="img-fluid img-fluid-image-50"
                                  />
                                </div>
                                <div className="col-8 col-md-12 col-lg-12">
                                  <h5>Browser</h5>
                                  <p className="productDesc">
                                    Supports Chrome, Safari, Firefox, Edge, etc
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12  mb-pd">
                            <div className="p-md-4">
                              <div className="row">
                                <div className="col-3 col-md-12 col-lg-12">
                                  <img
                                    src="../assets/image 49.png"
                                    alt=""
                                    className="img-fluid img-fluid-image-50"
                                  />
                                </div>
                                <div className="col-8 col-md-12 col-lg-12">
                                  <h5>TV & OTT Apps</h5>
                                  <p className="productDesc">
                                    Supports Amazon Fire TV, Roku, Samsung,
                                    Apple TV, ChromeCast, LG, Vizio, browsers,
                                    iOS, and Android
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="tab-pane fade "
                      id="contact-vertical"
                      role="tabpanel"
                      aria-labelledby="contact-vertical-tab"
                    >
                      <div className="customers ps-4">
                        <h1>Consumer 360</h1>
                        <p className="desc">
                          See and act on your user feedback in one place
                        </p>
                      </div>
                      <Link to={PathConstants.PRODUCTPAGE3}>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="p-md-4 right-border">
                            <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/Response to Users.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>In-line Direct Response to Users</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="p-md-4 right-border"> 
                             <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/Jira and Zendesk.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>Integrate with Jira and Zendesk</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12 mb-pd">
                            <div className="p-md-4">
                            <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/user sentiment.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>View insights and user sentiment</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="tab-pane fade "
                      id="profile-vertical"
                      role="tabpanel"
                      aria-labelledby="profile-vertical-tab"
                    >
                      <div className="customers ps-4">
                        <h1>Zero-Code Configuration</h1>
                        <p className="desc">
                          Save developer time for building your product.
                        </p>
                      </div>
                      <Link to={PathConstants.PRODUCTPAGE2}>
                        <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="p-md-4 right-border">                 
                                       <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/Copy and Paste.png"
                                  alt=""
                                  className="img-fluid copy-paste-image"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>Copy and Paste Integration</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="p-md-4 right-border">
                                                          <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/Maintenance.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>Low Product Maintenance</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                          </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12 pd-mb">
                            <div className="p-md-4">
                                                          <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/Live.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>Go live in 2 hours</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogSectionCommon homeBackGroundColor={"#EEF1F7"} />
      <BookDemo />
      <div className="row">
        <div className="col-md-12">
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="text-center">
                  <img
                    src="../assets/ic_close.png"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeVideo}
                    className="close-video-image"
                  />
                </div>
                <div className="modal-body">
                  <video
                    width="1000"
                    height="540"
                    controls
                    id="myVideo"
                    className="cuvo-video-section"
                  >
                    <source
                      src="../assets/video/CuVo Marketing Video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div
            className="modal fade"
            id="secondVideoModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="text-center">
                  <img
                    src="../assets/ic_close.png"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeSecondVideo}
                    className="close-video-image"
                  />
                </div>
                <div className="modal-body">
                  <video
                    width="1000"
                    height="540"
                    controls
                    id="secondVideo"
                    className="cuvo-video-section"
                  >
                    <source
                      src="../assets/video/CuVo Marketing Video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section id="secondPage">
        <div className="container">
          <div className="my-md-5 my-3">
            <div className="row">
              <div className="col-12 px-lg-0 px-3">
                <h1>Connect with your users</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-lg-8 col-12 px-lg-0 px-3">
                <p className="subtext">
                  CuVo is a consumer platform for products to collect live
                  feedback in-app and improve user engagement
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5 px-md-0 p-3">
                <div className="d-flex flex-column">
                  <div className="reasons p-4">
                    <div className="row pt-3">
                      <div className="col-lg-2 engage-text-image">
                        <img
                          className="img-fluid"
                          src="../assets/ic_two_waypng.png"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-10 engage-text">
                        <strong>Engage in two way communication</strong>
                        <p>
                          Gather live feedback from your users while they are
                          immersed in the experience and respond in real-time
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="reasons p-4">
                    <div className="row pt-3">
                      <div className="col-lg-2">
                        <img
                          className="img-fluid"
                          src="../assets/smart-tv 1.png"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-10">
                        <strong>Meet your consumers where they are</strong>
                        <p>
                          CuVo is available today on Amazon Fire TV, Roku,
                          Samsung, Apple TV, ChromeCast, LG, Vizio, browsers,
                          iOS, and Android
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="reasons p-4">
                    <div className="row pt-3">
                      <div className="col-lg-2">
                        <img
                          className="img-fluid"
                          src="../assets/artificial-intelligence 1.png"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-10">
                        <strong>Get insight with Consumer 360</strong>
                        <p>
                          Generative AI leveraged to automate quality responses
                          that are intelligent and reduce churn
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-7 px-0 text-center position-relative order-md-last order-first">
                <img
                  className="img-fluid img-1 img-fluid-rectangle-2 mt-3"
                  src="../assets/Rectangle 2.png"
                  alt=""
                />
                <img
                  src="../assets/Group 2498 (2).png"
                  alt=""
                  className="img-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="heading">
        <div className="container">
          <div className="py-md-5 py-3">
            <div className="row">
              <div className="col-12 px-md-0 px-3 text-center">
                <h1>Improve Consumer Satisfaction</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 px-0 text-center">
                <p className="subtext">
                  Create actionable steps to improve your product
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12 p-md-5 p-3">
                <div className="right-border">
                  <p className="sub-heading">CUT COSTS BY</p>
                  <p className="number1">30%</p>
                  <p className="description">
                    Save 30% on product development costs
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12 p-md-5 p-3">
                <div className="right-border">
                  <p className="sub-heading">IMPROVE CONSUMER RETENTION BY</p>
                  <p className="number2">70%</p>
                  <p className="description">
                    70% higher 90 day retention rate
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12 p-md-5 p-3 txt-md-c">
                <div>
                  <p className="sub-heading">
                    INCREASE USABILITY OF FEEDBACK BY
                  </p>
                  <p className="number3">200%</p>
                  <p className="description">
                    2X increase in actionable, relevant and timely feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="container">
          <div className="py-md-5 py-3">
            <div className="row mb-md-5 mb-2">
              <div className="col-12 px-0 text-center">
                <h1 className="text-center heading">Products</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                <div className="tab-vertical row">
                  <ul
                    className="nav nav-tabs col-md-3 col-12 p-0"
                    id="myTab3"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-vertical-tab"
                        data-toggle="tab"
                        href="#home-vertical"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Consumer
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-vertical-tab"
                        data-toggle="tab"
                        href="#profile-vertical"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Customer Success
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-vertical-tab"
                        data-toggle="tab"
                        href="#contact-vertical"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Developer
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-content col-md-9 col-12"
                    id="myTabContent3"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="home-vertical"
                      role="tabpanel"
                      aria-labelledby="home-vertical-tab"
                    >
                      <div className="customers meet-customer-cuvo">
                        <h1>Meet your consumers where they are</h1>
                        <p className="desc">
                          Cuvo can be deployed on any device and platform,
                          ensuring that your consumers voice is heard.
                        </p>
                      </div>
                      <Link to={PathConstants.PRODUCTPAGE1}>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-12 ">
                            <div className="right-border p-md-4">
                              <div className="row">
                                <div className="col-3 col-md-12 col-lg-12">
                                  <img
                                    src="../assets/images/icon/ic_mobile.png"
                                    alt=""
                                    className="img-fluid img-fluid-image-50"
                                  />
                                </div>
                                <div className="col-8 col-md-12 col-lg-12">
                                  <h5>Mobile App</h5>
                                  <p className="productDesc">
                                    Supports iOS and Android
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12 ">
                            <div className="right-border p-md-4">
                              <div className="row">
                                <div className="col-3 col-md-12 col-lg-12">
                                  <img
                                    src="../assets/image 48.png"
                                    alt=""
                                    className="img-fluid img-fluid-image-50"
                                  />
                                </div>
                                <div className="col-8 col-md-12 col-lg-12">
                                  <h5>Browser</h5>
                                  <p className="productDesc">
                                    Supports Chrome, Safari, Firefox, Edge, etc
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12  mb-pd">
                            <div className="p-md-4">
                              <div className="row">
                                <div className="col-3 col-md-12 col-lg-12">
                                  <img
                                    src="../assets/image 49.png"
                                    alt=""
                                    className="img-fluid img-fluid-image-50"
                                  />
                                </div>
                                <div className="col-8 col-md-12 col-lg-12">
                                  <h5>TV & OTT Apps</h5>
                                  <p className="productDesc">
                                    Supports Amazon Fire TV, Roku, Samsung,
                                    Apple TV, ChromeCast, LG, Vizio, browsers,
                                    iOS, and Android
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact-vertical"
                      role="tabpanel"
                      aria-labelledby="contact-vertical-tab"
                    >
                      <div className="customers">
                        <h1>Consumer 360</h1>
                        <p className="desc">
                          See and act on your user feedback in one place
                        </p>
                      </div>
                      <Link to={PathConstants.PRODUCTPAGE3}>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-12 p-md-5 right-border">
                            <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/images/icon/ic_mobile.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>In-line Direct Response to Users</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12 p-md-5 right-border">
                            <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/image 48.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>Integrate with Jira and Zendesk</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12 p-md-5">
                            <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/image 49.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>View insights and user sentiment</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile-vertical"
                      role="tabpanel"
                      aria-labelledby="profile-vertical-tab"
                    >
                      <div className="customers">
                        <h1>Zero-Code Configuration</h1>
                        <p className="desc">
                          Save developer time for building your product.
                        </p>
                      </div>
                      <Link to={PathConstants.PRODUCTPAGE2}>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-12 p-md-5 right-border">
                            <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/images/icon/ic_mobile.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>Copy and Paste Integration</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12 p-md-5 right-border">
                            <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/image 48.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>Low Product Maintenance</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12 p-md-5">
                            <div className="row">
                              <div className="col-3 col-md-12 col-lg-12">
                                <img
                                  src="../assets/image 49.png"
                                  alt=""
                                  className="img-fluid img-fluid-image-50"
                                />
                              </div>
                              <div className="col-8 col-md-12 col-lg-12">
                                <h5>Go live in 2 hours</h5>
                                <p className="productDesc"> </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogSectionCommon homeBackGroundColor={"#EEF1F7"} />
      <BookDemo />
    </div> */}
    </div>
  );
};

export default HomePage;
