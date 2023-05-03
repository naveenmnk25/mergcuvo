import React from "react";
import "./index.css";

const AboutUs = () => {
  return (
    <div>
      <section className="banner aboutus-banner">
        <div className="container">
          <div className="row child1 align-items-center">
            <div className="col-8 col-md-8 col-sm-12 px-0">
              {/* <h1 className="mb-3 about-us-text">About Us</h1> */}
              <h1 className="">About Us</h1>
              <p className="about-us-text-sub-heading">
                CuVo is a customer first company with a mission to transform the
                consumer engagement experience. We are an innovative team whose
                best moments are when we are creating game changing solutions to
                transform consumer engagement
              </p>
              <a href='https://www.youtube.com/@cuvo-info' target="_blank">
                <button
                  className="btn btn-primary about-us-watch-btn"
                  type="submit"
                >
                  Watch A Demo
                </button>
              </a>

            </div>
          </div>
        </div>
      </section>

      <section id="digital" className="bg-theme">
        <div className="container">
          <div className="cards">
            <div className="row">
              <div className="col-12 px-0 text-center digital-spacing-text">
                <h2 className="text-center text-white mb-6 digital-text-heading">
                  Consumer engagement platform company that transforms how
                  humans engage with media and entertainment.
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="card text-center">
                  <img src="../assets/Values.svg" className="img_auto m-auto" />
                  <h5 className="mt-3">Our Values</h5>
                  <p>
                    We are a customer-first company with a passion for
                    innovation. We are committed to operational excellence but
                    we know fast is better than slow.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="card text-center">
                  <img
                    src="../assets/mission.svg"
                    className="img_auto m-auto"
                  />
                  <h5 className="mt-3">Our Mission</h5>
                  <p>
                    To transform the consumer engagement experience to make
                    humans extremely satisfied with their digital products.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="card text-center">
                  <img src="../assets/vision.svg" className="img_auto m-auto" />
                  <h5 className="mt-3">Our Vision</h5>
                  <p>
                    A world where the human experience using digital products is
                    automatically personalized for every user.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="leadership">
        <div className="container">
          <div className="py-5 pb-6">
            <div className="row">
              <div className="col-12 px-0 text-center">
                <h2 className="leadership-team-text">Leadership Team</h2>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12 px-0 text-center">
                <p className="mx-md-5 px-md-5 leadership-team-sub-text-heading">
                  CuVo’s founding team has a successful track record in building
                  and scaling multiple companies. We are a season team with
                  high-tech industry experience of ~100 years between us. We
                  bring industry experience, entrepreneurial dynamism, and
                  leadership maturity that comes with the hands-on experience of
                  company building.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3 col-lg-3">
                <a href="https://www.linkedin.com/in/malaramakrishnan/">
                  <div className="card">
                    <img
                      src="../assets/Mala.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Mala Ramakrishnan</h5>
                      <p>
                        Co-Founder and Chief Product Officer CuVo (Customer
                        Voice)
                      </p>
                      <p>
                        Successful exit of two companies as founder. ~25 years
                        as product management and marketing leader at Meta,
                        Cloudera, Veeva, Automation Anywhere, & Oracle. Masters
                        in Computer Science from Stanford University.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <a href="https://www.linkedin.com/in/vijay-redla-6398373/">
                  <div className="card">
                    <img
                      src="../assets/VijayRedla.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Vijay Redla</h5>
                      <p>Founder and Chief Delivery Officer NomiSo Inc</p>
                      <p>
                        ~25 years leading professional services & customer
                        success at Airbnb, ATT labs, Comcast, Alamo Labs and
                        Moody’s, CA County, through Oracle. Head product
                        development for Oracle ERP applications.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <a href="https://www.linkedin.com/in/phani-kolaraja/">
                  <div className="card">
                    <img
                      src="../assets/PhaniKolaraja.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Phani Kolaraja</h5>
                      <p>Co-Founder, CEO CuVo (Customer Voice)</p>
                      <p>
                        Built and sold three companies with over $50M in
                        revenues. CEO of OTT service integration company with
                        year on year growth of over 200%, leading teams of 550+.
                        ~25 years experience in sales leadership.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <a href="https://www.linkedin.com/in/chandra-narayanasamy-50537ba1/">
                  <div className="card">
                    <img
                      src="../assets/Chandra Narayanasamy.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chandra Narayanasamy</h5>
                      <p>Co-Founder CuVo(Customer Voice)</p>
                      <p>
                        Head engineering for Sling, Onstream, Openstack. ~25
                        years experience as architect of distributed systems of
                        internet scale. Built teams with 300+ engineers.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="operating">
        <div className="container">
          <div className="operating">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-12 pT-67">
                <h3 className="mb-3 operating-principle-text">
                  Operating Principles
                </h3>
                <p className="operating-principle-sub-text">
                  Our operating principles provide us with a common language to
                  turn what we stand for into the ways we work, make decisions,
                  and collaborate together.
                </p>
                <div className="principles mt-5">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                      <div className="d-flex items">
                        <div className="icon-img">
                          <img src="../assets/star.png" />
                        </div>
                        <p className="ps-4 mt-2 operating-principle-list-text">
                          Go purposefully.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <div className="d-flex items">
                        <div className="icon-img">
                          <img src="../assets/Icons/ic_move.svg" />
                        </div>
                        <p className="ps-4 mt-2 operating-principle-list-text">
                          Move with urgency.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                      <div className="d-flex items">
                        <div className="icon-img">
                          <img src="../assets/Icons/ic_Pause.svg" />
                        </div>
                        <p className="ps-4 mt-2 operating-principle-list-text">
                          Pause on principle.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <div className="d-flex items">
                        <div className="icon-img">
                          <img src="../assets/Icons/ic_recover.svg" />
                        </div>
                        <p className="ps-4 mt-2 operating-principle-list-text">
                          Recover quickly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                      <div className="d-flex items">
                        <div className="icon-img">
                          <img src="../assets/Icons/ic_Non-negotiables.svg" />
                        </div>
                        <p className="ps-4 mt-2 operating-principle-list-text">
                          Articulate non-negotiables.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <div className="d-flex items ">
                        <div className="icon-img">
                          <img src="../assets/Icons/ic_win.svg" />
                        </div>
                        <p className="ps-4 mt-2 operating-principle-list-text">
                          Win (or lose) together.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                      <div className="d-flex items">
                        <div className="icon-img">
                          <img src="../assets/Icons/ic_win_2.svg" />
                        </div>
                        <p className="ps-4 mt-2 operating-principle-list-text">
                          Finish first.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 pT-94">
                <img
                  src="../assets/img_principles.png"
                  className="m-auto img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="join-team" className="py-5">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h1 className="pb-3 fw-bold join-team-text">
                Interested in joining our team?
              </h1>
              <button className="btn btn-primary info-cuvo-btn" type="submit">
                info@cuvo.io
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
