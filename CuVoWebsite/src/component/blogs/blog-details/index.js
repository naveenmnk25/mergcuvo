import React from 'react';
import { PathConstants } from '../../constants/path-constants';
import './index.css';

const BlogList = () => {

    const blogDetailClick = (blog) => {
        if (blog === 'blog1') {
            window.location.href = PathConstants.BLOGDETAIL1;
        } else if (blog === 'blog2') {
            window.location.href = PathConstants.BLOGDETAIL2;
        } else if (blog === 'blog3') {
            window.location.href = PathConstants.BLOGDETAIL3;
        }


    }

    return (
        <section id="afterproducts">
            <div className="container">
                <div className="py-5">
                    <div className="row">
                        <div className="col-12 px-0 text-center">
                            <h1>Case Studies and Articles</h1>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12 px-0 text-center">
                            <p className="mx-md-5 px-md-5 mx-lg-5 px-lg-5">Learn how CuVo is revolutionizing real-time consumer feedback</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 col-12 mb-md-0 mb-lg-0 mb-3 mb-3-img-fluid-image-14"
                            onClick={() => blogDetailClick('blog1')}>
                            <img src="../assets/14.png" className="img-fluid img-fluid-image-14" alt="" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 mb-md-0 mb-lg-0 mb-3">
                            <div className="card">
                                <img src="../assets/20.png" className="card-img-top" alt="..." />
                                <div className="card-body mb-3-img-fluid-image-14" onClick={() => blogDetailClick('blog2')}>
                                    <h5 className="card-title">Class aptent taciti sociosqu ad litora torquent per conubia
                                        nostra, per inceptos himenaeos.</h5>
                                    <div className="row align-items-center">
                                        <div className="col-2 pe-0">
                                            <img src="../assets/Ellipse 7.png" alt="" className="img-fluid img-fluid-image-Ellipse-7" />
                                        </div>
                                        <div className="col-8">
                                            <strong className="author">Melvin Xavier</strong>
                                            <p className="auhordesc mb-0">Vice President, Singapore Sales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 mb-md-0 mb-lg-0 mb-3">
                            <div className="card">
                                <img src="../assets/22.png" className="card-img-top" alt="..." />
                                <div className="card-body mb-3-img-fluid-image-14" onClick={() => blogDetailClick('blog3')}
                                >
                                    <h5 className="card-title">Class aptent taciti sociosqu ad litora torquent per conubia
                                        nostra, per inceptos himenaeos.</h5>
                                    <div className="row align-items-center">
                                        <div className="col-2 pe-0">
                                            <img src="../assets/Ellipse 7.png" alt="" className="img-fluid img-fluid-image-Ellipse-7" />
                                        </div>
                                        <div className="col-8">
                                            <strong className="author">Melvin Xavier</strong>
                                            <p className="auhordesc mb-0">Vice President, Singapore Sales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogList;