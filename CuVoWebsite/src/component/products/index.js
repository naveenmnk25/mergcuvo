import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PathConstants } from "../constants/path-constants";
import BlogSectionCommon from "../blogs/blog-section-common";
import BookDemo from "../book-demo";
import "./index.css";

const Product = () => {
  const readMoreClick = () => {
    window.location.href = PathConstants.BLOGLIST;
  };

  const { useState, Fragment } = React;
  const [active, setActive] = useState("");
  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <div>
      <section className="banner product-page-banner">
        <div className="container">
          <div className="row child1 align-items-center text-start">
            <div className="col-6 col-lg-6 col-sm-6 px-3 product-2">
              <h1 className="">Our Products</h1>
              <p className="mt-5">
                The Media and Entertainment (M&E) industry has multiple segments
                that combine into one vertical; Movies/Cinema, Television,
                Music, Publishing, Radio, Internet, Advertising and Gaming.
                Moreover, trends and drivers for each of the segments vary
                across sub-segments, geographies and consumer segments.
              </p>
              <a href='https://www.youtube.com/@cuvo-info' target="_blank">
                <button className="product-watch-demo-btn btn btn-primary" type="submit">Watch A Demo</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="scrollspyall"
        className="scrollspyall scrollspyall-sec"
        data-bs-spy="scroll"
        data-bs-target=".navbar"
        data-bs-offset="50"
      >
        <nav className="navbar navbar-expand-sm bg-light navbar-light position-sticky">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={active === "1" ? "active nav-link" : "nav-link"}
                  id={"1"}
                  onClick={handleClick}
                  href="#overview"
                >
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={active === "2" ? "active nav-link" : "nav-link"}
                  id={"2"}
                  onClick={handleClick}
                  href="#products"
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={active === "3" ? "active nav-link" : "nav-link"}
                  id={"3"}
                  onClick={handleClick}
                  href="#capability"
                >
                  Capabilities
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={active === "4" ? "active nav-link" : "nav-link"}
                  id={"4"}
                  onClick={handleClick}
                  href="#afterproducts"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={active === "5" ? "active nav-link" : "nav-link"}
                  id={"5"}
                  onClick={handleClick}
                  href="#form"
                >
                  Try Now
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <section id="overview" className="overview">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="overview_img">
                  <img src="../assets/images/home/img_overview.png" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-8 col-12">
                <div className="overview_text px-3 py-1 overview-title">
                  <h3 className="p-0">Overview</h3>
                  <p>
                    Mauris hendrerit lectus a porta molestie. Etiam congue,
                    lacus ut convallis elementum, nisi erat molestie dui, nec
                    lobortis nulla nisl et ex. Nam commodo, magna ut dapibus
                    egestas, dui mauris convallis quam, sed auctor sem leo vitae
                    metus. Suspendisse sit amet neque turpis.
                  </p>
                  <p>
                    Suspendisse interdum purus nec neque pharetra, nec dapibus
                    massa interdum. In elit magna, dictum sed rhoncus nec,
                    venenatis at turpis. Aenean eu magna nunc. Maecenas id ipsum
                    turpis. Mauris auctor id risus eu aliquet. Aliquam justo
                    sem, laoreet non risus vel, mollis feugiat dui. Nulla
                    consectetur est lobortis blandit aliquet. Nam interdum et
                    enim vel mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products">
          <div className="container">
            <div className="py-md-5 py-3">
              <div className="row mb-md-5 mb-3">
                <div className="col-12 px-0 text-center">
                  <h1 className="text-white text-center heading">Products</h1>
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
                        <div className="customers">
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
                                      Supports Chrome, Safari, Firefox, Edge,
                                      etc
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
                                    src="../assets/images/icon/ic_mobile.png"
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
                                    src="../assets/images/icon/ic_mobile.png"
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
                                    src="../assets/images/icon/ic_mobile.png"
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
                                    src="../assets/images/icon/ic_mobile.png"
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

        <section id="capability">
          <div className="container">
            <div className="py-lg-5 py-2">
              <div className="row">
                <div className="col-12 px-0 text-center">
                  <h2>Capabilities</h2>
                </div>
              </div>
              <div className="row mb-lg-5 mb-2">
                <div className="col-12 px-lg-0 px-2 text-center">
                  <p className="mx-lg-5 px-lg-5 capabilities-des">
                    Phasellus imperdiet mattis lectus eget auctor. Praesent
                    varius elit venenatis ligula faucibus, id iaculis ligula
                    luctus. Cras elementum hendrerit lectus, non sodales lacus
                    tempor eget. Donec at dui orci.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-3 col-md-6">
                  <div className="card p-lg-4 px-3 pt-3">
                    <img src="../assets/images/icon/ic_mobile.png" alt="..." />
                    <div className="card-body px-0">
                      <h5 className="card-title capabilities-card">
                        Unique selling point 1
                      </h5>
                      <p class="card-dec">
                        Get live feedback from your users while they are in the
                        experience and respond in real-time
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                  <div className="card p-lg-4 px-3 pt-3">
                    <img src="../assets/images/icon/ic_mobile.png" alt="..." />
                    <div className="card-body px-0">
                      <h5 className="card-title capabilities-card">
                        Unique selling point 1
                      </h5>
                      <p class="card-dec">
                        Get live feedback from your users while they are in the
                        experience and respond in real-time
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                  <div className="card p-lg-4 px-3 pt-3">
                    <img src="../assets/images/icon/ic_mobile.png" alt="..." />
                    <div className="card-body px-0">
                      <h5 className="card-title capabilities-card">
                        Unique selling point 1
                      </h5>
                      <p class="card-dec">
                        Get live feedback from your users while they are in the
                        experience and respond in real-time
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                  <div className="card p-lg-4 px-3 pt-3">
                    <img src="../assets/images/icon/ic_mobile.png" alt="..." />
                    <div className="card-body px-0">
                      <h5 className="card-title capabilities-card">
                        Unique selling point 1
                      </h5>
                      <p class="card-dec">
                        Get live feedback from your users while they are in the
                        experience and respond in real-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BlogSectionCommon homeBackGroundColor={"#EEF1F7"} />
        <BookDemo />
      </section>
    </div>
  );
};

export default Product;
