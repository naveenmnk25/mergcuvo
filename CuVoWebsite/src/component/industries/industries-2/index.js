import React from 'react';
import { PathConstants } from '../../constants/path-constants';
import BookDemo from '../../book-demo';
import './index.css';
import BlogSectionCommon from '../../blogs/blog-section-common';

const IndustriesTwo = () => {

    const readMoreClick = () => {
        window.location.href = PathConstants.BLOGLIST;
    }

    return (
        <div>
            <section className="banner industries-detail-banner">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-12 col-md-12 col-sm-12 px-3 media-text-spacing">
                            <h1 className="mb-3 text-center media-text-heading">Mobile Applications</h1>
                        </div>
                    </div>
                    <div className="row align-items-center text-center">
                        <div className="col-12 col-md-12 col-sm-12 px-3 media-text-sub-heading-spacing">
                            <p className="mb-4 media-text-sub-heading">The Media and Entertainment (M&amp;E) industry has multiple segments that combine into one vertical; Movies/Cinema, Television, Music, Publishing, Radio, Internet, Advertising and Gaming. Moreover, trends and drivers for each of the segments vary across sub-segments, geographies and consumer segments.</p>
                        </div>
                    </div>
                    <div className="row child1 align-items-center text-center">
                        <div className="col-12 col-md-12 col-sm-12 px-3">
                            <a href='https://www.youtube.com/@cuvo-info' target="_blank">
                                <button className="btn btn-primary learn-more-btn-text" type="submit">Learn More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="scrollspyall" className="scrollspyall" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
                <nav id="scrollspyall-nav" className="navbar navbar-expand-sm bg-light navbar-light position-sticky">
                    <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active overview-text" href="#overview">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link overview-text" href="#usecases">Use Cases</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link overview-text" href="#afterproducts">Blogs</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <section id="overview" className="overview">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="overview_img">
                                    <img src="../assets/images/home/img_overview.png" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-8 col-12">
                                <div className="overview_text px-3 py-1">
                                    <h3 className="p-0 overview-text-heading">Overview</h3>
                                    <p className='overview-text-sub-heading'>
                                        Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut convallis elementum, nisi erat molestie dui, nec lobortis nulla nisl et ex. Nam commodo, magna ut dapibus egestas, dui mauris convallis quam, sed auctor sem leo vitae metus. Suspendisse sit amet neque turpis.

                                        Suspendisse interdum purus nec neque pharetra, nec dapibus massa interdum. In elit magna, dictum sed rhoncus nec, venenatis at turpis. Aenean eu magna nunc. Maecenas id ipsum turpis. Mauris auctor id risus eu aliquet. Aliquam justo sem, laoreet non risus vel, mollis feugiat dui. Nulla consectetur est lobortis blandit aliquet. Nam interdum et enim vel mattis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="usecases" className="py-5 d-md-block d-none">
                    <h2 className="text-center mb-4 use-case-text-heading">Use Cases</h2>
                    <div className="container">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active use-case-nav-link" data-bs-toggle="tab" href="#home">INCREASE CUSTOMER RETENTION AND PROFITABILITY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link use-case-nav-link" data-bs-toggle="tab" href="#menu1">IMPROVE REGULATORY COMPLIANCE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link use-case-nav-link" data-bs-toggle="tab" href="#menu2">REDUCE FRAUD AND RISK EXPOSURE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link use-case-nav-link border-right-0" data-bs-toggle="tab" href="#menu2">MODERNIZE ENTERPRISE ANALYTICS</a>
                            </li>
                        </ul>
                        <div className="tab-content tab-content-overview">
                            <div id="home" className="container tab-pane active">
                                <h3 className='tab-content-overview-text'>Overview</h3>
                                <p className='tab-content-overview-sub-text'>Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut convallis elementum, nisi erat molestie dui, nec lobortis nulla nisl et ex. Nam commodo, magna ut dapibus egestas, dui mauris convallis quam, sed auctor sem leo vitae metus. Suspendisse sit amet neque turpis.
                                    Suspendisse interdum purus nec neque pharetra, nec dapibus massa interdum. In elit magna, dictum sed rhoncus nec, venenatis at turpis. Aenean eu magna nunc. Maecenas id ipsum turpis. Mauris auctor id risus eu aliquet. Aliquam justo sem, laoreet non risus vel, mollis feugiat dui. Nulla consectetur est lobortis blandit aliquet. Nam interdum et enim vel mattis.</p>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-2">
                                                <img src="../assets/file.png" className="doc-img w-auto" />
                                            </div>
                                            <div className="col-10">
                                                <p className="doc-text mt-2">Use Data and Analytics to Enhance Customer Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-2">
                                                <img src="../assets/file.png" className="doc-img w-auto" />
                                            </div>
                                            <div className="col-10">
                                                <p className="doc-text mt-2">Use Data and Analytics to Enhance Customer Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-2">
                                                <img src="../assets/file.png" className="doc-img w-auto" />
                                            </div>
                                            <div className="col-10">
                                                <p className="doc-text mt-2">Use Data and Analytics to Enhance Customer Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu1" className="container tab-pane fade">
                                <h3>Menu 1</h3>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div id="menu2" className="container tab-pane fade">
                                <h3>Menu 2</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="mx-auto text-center mt-5">
                            <button className="btn btn-primary" type="button">View All</button>
                        </div>
                    </div>
                </section>
                <section id="usecases" className="d-block d-md-none py-3">
                    <h2 className="text-center mb-2">Use Cases</h2>
                    <div className="container">
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header">
                                    <a className="btn" data-bs-toggle="collapse" href="#home">
                                        INCREASE CUSTOMER RETENTION AND PROFITABILITY
                                    </a>
                                </div>
                                <div id="home" className="collapse show" data-bs-parent="#accordion">

                                    <div className="card-body">
                                        <h3>Overview</h3>
                                        <p>Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut convallis elementum, nisi erat molestie dui, nec lobortis nulla nisl et ex. Nam commodo, magna ut dapibus egestas, dui mauris convallis quam, sed auctor sem leo vitae metus. Suspendisse sit amet neque turpis.

                                            Suspendisse interdum purus nec neque pharetra, nec dapibus massa interdum. In elit magna, dictum sed rhoncus nec, venenatis at turpis. Aenean eu magna nunc. Maecenas id ipsum turpis. Mauris auctor id risus eu aliquet. Aliquam justo sem, laoreet non risus vel, mollis feugiat dui. Nulla consectetur est lobortis blandit aliquet. Nam interdum et enim vel mattis.</p>
                                        <div className="row mt-md-5 mt-2">
                                            <div className="col-md-4 col-12 my-2">
                                                <div className="row">
                                                    <div className="col-md-2 col-3">
                                                        <img src="../assets/file.png" className="doc-img w-auto" />
                                                    </div>
                                                    <div className="col-md-10 col-9 ps-0 ms-0">
                                                        <p className="doc-text mt-2">Use Data and Analytics to Enhance Customer Experience</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-12 my-2">
                                                <div className="row">
                                                    <div className="col-md-2 col-3">
                                                        <img src="../assets/file.png" className="doc-img w-auto" />
                                                    </div>
                                                    <div className="col-md-10 col-9 ps-0 ms-0">
                                                        <p className="doc-text mt-2">Use Data and Analytics to Enhance Customer Experience</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-12 my-2">
                                                <div className="row">
                                                    <div className="col-md-2 col-3">
                                                        <img src="../assets/file.png" className="doc-img w-auto" />
                                                    </div>
                                                    <div className="col-md-10 col-9 ps-0 ms-0">
                                                        <p className="doc-text mt-2">Use Data and Analytics to Enhance Customer Experience</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                                        IMPROVE REGULATORY COMPLIANCE
                                    </a>
                                </div>
                                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                                        REDUCE FRAUD AND RISK EXPOSURE
                                    </a>
                                </div>
                                <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
                                        MODERNIZE ENTERPRISE ANALYTICS
                                    </a>
                                </div>
                                <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <BlogSectionCommon />
            </section>
            <section id="resources">
                <div className="container">
                    <div className="">
                        <div className="row resources-heading-text-spacing">
                            <div className="col-12 px-0 text-center">
                                <h1 className="text-dark text-center heading resources-heading-text">Resources</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 mb-md-0 mb-lg-0 mb-3">
                                <div className="card card-ebook">
                                    <div className="card-body resource-ebook-first-box">
                                        <div className="row align-items-center">
                                            <div className="whitepapers">
                                                <h5 className="book text-white">EBOOK</h5>
                                                <h4 className="redefin text-white">Redefining Customer Experience in Financial Services</h4>
                                                <small className="text-white read-more-text-first-box">Read More</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 mb-md-0 mb-lg-0 mb-3">
                                <div className="card">
                                    <div className="card-body resource-whitepaper-first-box">
                                        <div className="row align-items-center">
                                            <div className="whitepapers">
                                                <h5 className="book">WHITEPAPERS</h5>
                                                <h4 className="redefin" >Class aptent taciti sociosqu ad litora torquent nostra...</h4>
                                                <small className="resource-whitepaper-first-box-read-more-text">Read More</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 mb-md-0 mb-lg-0 mb-3">
                                <div className="card">
                                    <div className="card-body resource-whitepaper-first-box">
                                        <div className="row align-items-center">
                                            <div className="whitepapers">
                                                <h5 className="book">WHITEPAPERS</h5>
                                                <h4 className="redefin">Class aptent taciti sociosqu ad litora torquent nostra...</h4>
                                                <small className="resource-whitepaper-first-box-read-more-text">Read More</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-whitepapers" >
                            <div className="col-lg-3 col-md-3 col-12 mb-md-0 mb-lg-0 mb-3">
                                <div className="card" >
                                    <div className="card-body  resource-whitepaper-first-box">
                                        <div className="row align-items-center">
                                            <div className="whitepapers">
                                                <h5 className="book">WHITEPAPERS</h5>
                                                <h4 className="redefin" >Class aptent taciti sociosqu ad litora torquent nostra...</h4>
                                                <small className="resource-whitepaper-first-box-read-more-text">Read More</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 mb-md-0 mb-lg-0 mb-3">
                                <div className="card">
                                    <div className="card-body resource-whitepaper-first-box">
                                        <div className="row align-items-center">
                                            <div className="whitepapers">
                                                <h5 className="book">WHITEPAPERS</h5>
                                                <h4 className="redefin" >Class aptent taciti sociosqu ad litora torquent nostra...</h4>
                                                <small className="resource-whitepaper-first-box-read-more-text">Read More</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mb-md-0 mb-lg-0 mb-3">
                                <div className="card card-ebook-second">
                                    <div className="card-body resource-ebook-first-box">
                                        <div className="row align-items-center">
                                            <div className="whitepapers">
                                                <h5 className="book text-white">EBOOK</h5>
                                                <h4 className="redefin text-white">Redefining Customer Experience in Financial Services</h4>
                                                <small className="read-more-text-first-box">Read More</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className=" child1 text-center container mt-mb-4 resource-view-all-btn">
                            <button className="btn btn-primary btn1 resource-view-all-btn-text" type="submit">VIEW ALL</button>
                        </div>
                    </div>
                </div>
            </section>
            <BookDemo />
        </div >

    )
}

export default IndustriesTwo;