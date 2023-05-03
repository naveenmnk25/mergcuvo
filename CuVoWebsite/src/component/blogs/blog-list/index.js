import React from "react";
import { PathConstants } from "../../constants/path-constants";
import "./index.css";

const BlogList = (homeBackGroundColor) => {
  console.log("homeBackGroundColor===", homeBackGroundColor);
  const readMoreClick = () => {
    window.location.href = PathConstants.BLOGLIST;
  };

  const redirectToBlogPages = (blogNo) => {
    if (blogNo === 1) {
      window.location.href = PathConstants.BLOGDETAIL1;
    } else if (blogNo === 2) {
      window.location.href = PathConstants.BLOGDETAIL2;
    } else if (blogNo === 3) {
      window.location.href = PathConstants.BLOGDETAIL3;
    }
  };
  return (
    <section
      id="afterproducts"
      style={{ background: homeBackGroundColor.homeBackGroundColor }}
    >
      <div className="container">
        <div className="py-5">
          <div className="row">
            <div className="col-12 px-0 text-center">
              <h1 className="afterproducts-case-study-text">
                Case Studies and Articles
              </h1>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 px-0 text-center">
              <p className="mx-md-5 px-md-5 mx-lg-5 px-lg-5 afterproducts-case-study-sub-text case">
                Learn how CuVo is revolutionizing real-time consumer feedback
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-12 mb-md-0 mb-lg-0 mb-3">
              <img
                src="../assets/14.png"
                className="img-fluid img-fluid-image-40"
                alt=""
              />
              <div
                className="text-overlap-with-image"
                onClick={() => redirectToBlogPages(1)}
              >
                <h5 className="card-title text-overlap-with-image-text">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </h5>
                <div className="row align-items-center">
                  <div className="col-2">
                    <img
                      src="../assets/Ellipse 7.png"
                      alt=""
                      className="img-fluid img-fluid-image-ellipse-7"
                    />
                  </div>
                  <div className="col-9 blogs-card-footer-text text-overlap-with-image-sub-text">
                    <strong className="author text-overlap-with-image-sub-text-author">
                      Melvin Xavier
                    </strong>
                    <p className="auhordesc mb-0 text-overlap-with-image-sub-text-author">
                      Vice President, Singapore Sales
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-md-0 mb-lg-0 mb-3">
              <div className="card">
                <img
                  src="../assets/20.png"
                  className="card-img-top"
                  alt="..."
                />
                <div
                  className="card-body blogs-card-body"
                  onClick={() => redirectToBlogPages(2)}
                >
                  <h5 className="card-title">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </h5>
                  <div className="row align-items-center blogs-image-text-section">
                    <div className="col-3">
                      <img
                        src="../assets/Ellipse 7.png"
                        alt=""
                        className="img-fluid img-fluid-image-ellipse-7"
                      />
                    </div>
                    <div className="col-9 blogs-card-footer-text">
                      <strong className="author">Melvin Xavier</strong>
                      <p className="auhordesc mb-0">
                        Vice President, Singapore Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-md-0 mb-lg-0 mb-3">
              <div className="card">
                <img
                  src="../assets/22.png"
                  className="card-img-top"
                  alt="..."
                />
                <div
                  className="card-body blogs-card-body"
                  onClick={() => redirectToBlogPages(3)}
                >
                  <h5 className="card-title">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </h5>
                  <div className="row align-items-center blogs-image-text-section">
                    <div className="col-3">
                      <img
                        src="../assets/Ellipse 7.png"
                        alt=""
                        className="img-fluid img-fluid-image-ellipse-7"
                      />
                    </div>
                    <div className="col-9 blogs-card-footer-text">
                      <strong className="author">Melvin Xavier</strong>
                      <p className="auhordesc mb-0">
                        Vice President, Singapore Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-sm-12 px-0">
              <div className="d-flex flex-column align-items-center">
                <button
                  className="mt-md-6 mt-4 btn-primary-read-more-btn"
                  type="submit"
                  onClick={readMoreClick}
                >
                  View all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
