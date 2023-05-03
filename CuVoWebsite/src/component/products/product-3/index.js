import React from 'react';
import { useState } from 'react';
import './index.css';

const ProductThree = () => {

    const { useState } = React;
    const [active, setActive] = useState("");
    const handleClick = (event) => {
        setActive(event.target.id);
    }

    return (
        <div>
            <section className="banner product-detail-banner">
                <div className="container">
                    <div className="row child1 align-items-center">
                        <div className="col-8 col-md-8 col-sm-12 px-0">
                            <h1 className="mb-3">CuVo Discover</h1>
                            <p className="mb-4">The Media and Entertainment (M&E) industry has multiple segments that combine into one vertical; Movies/Cinema, Television, Music, Publishing, Radio, Internet, Advertising and Gaming. Moreover, trends and drivers for each of the segments vary across sub-segments, geographies and consumer segments.</p>
                            <a href='https://www.youtube.com/@cuvo-info' target="_blank">
                                <button className="btn btn-primary" type="submit">Watch A Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="scrollspyall" className="scrollspyall" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
                <nav className="navbar navbar-expand-sm bg-light navbar-light position-sticky">
                    <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={active === "1" ? "active nav-link" : "nav-link"} id={"1"} onClick={handleClick} href="#overview">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className={active === "2" ? "active nav-link" : "nav-link"} id={"2"} onClick={handleClick} href="#product-name">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className={active === "3" ? "active nav-link" : "nav-link"} id={"3"} onClick={handleClick} href="#capability">Capabilities</a>
                            </li>
                            <li className="nav-item">
                                <a className={active === "4" ? "active nav-link" : "nav-link"} id={"4"} onClick={handleClick} href="#section4">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className={active === "5" ? "active nav-link" : "nav-link"} id={"5"} onClick={handleClick} href="#section4">Release Note</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section id="overview" className="overview">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="overview_img">
                                    <img src="../assets/images/home/img_product_de.png" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="overview_text px-3 py-1 overview-title">
                                    <h3 className="p-0">Overview</h3>
                                    <p>
                                        Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut convallis elementum, nisi erat molestie dui, nec lobortis nulla nisl et ex. Nam commodo, magna ut dapibus egestas, dui mauris convallis quam, sed auctor sem leo vitae metus. Suspendisse sit amet neque turpis.
                                    </p>
                                    <p>
                                        Suspendisse interdum purus nec neque pharetra, nec dapibus massa interdum. In elit magna, dictum sed rhoncus nec, venenatis at turpis. Aenean eu magna nunc. Maecenas id ipsum turpis. Mauris auctor id risus eu aliquet. Aliquam justo sem, laoreet non risus vel, mollis feugiat dui. Nulla consectetur est lobortis blandit aliquet. Nam interdum et enim vel mattis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section id="product-name">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-w">
                            <div className="tab-vertical row">
                                <ul className="nav nav-tabs col-1 pe-0 bg-ligblue product-nav" id="myTab3" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-vertical-tab" data-toggle="tab"
                                            href="#home-vertical" role="tab" aria-controls="home"
                                            aria-selected="true">MOBILE</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-vertical-tab" data-toggle="tab"
                                            href="#profile-vertical" role="tab" aria-controls="profile"
                                            aria-selected="false">BROWSER</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-vertical-tab" data-toggle="tab"
                                            href="#contact-vertical" role="tab" aria-controls="contact"
                                            aria-selected="false">TELEVISION</a>
                                    </li>
                                </ul>
                                <div className="tab-content col-10 " id="myTabContent3">
                                    <div className="tab-pane fade show active mobile-tab" id="home-vertical" role="tabpanel"
                                        aria-labelledby="home-vertical-tab">
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="ps-2 position-relative iph">
                                                    <img src="../assets/images/home/mobile_Frame.png" className="img-fluid position-absolute" />
                                                </div>
                                            </div>
                                            <div className="col ms-5">
                                                <h1 className="text-white">Product Name</h1>

                                                <h4 className="text-white mt-3">Overview</h4>

                                                <p className="desc text-white">Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut convallis
                                                    elementum, nisi erat molestie dui, nec lobortis nulla nisl et ex. Nam commodo,
                                                    nec dapibus massa interdum.</p>
                                                <div className="row mobile-row">
                                                    <div className="col right-border text-center">
                                                        <div className="mt-2">
                                                            <img src="../assets/images/icon/ic_android.png" alt="" className="w-auto img-sto" />

                                                            <img src="../assets/images/icon/ic_apple.png" alt="" className="w-auto img-sto me-2" />
                                                        </div>
                                                        <h5 className="text-white mt-3">iOS and Android</h5>
                                                        <p className="productDesc text-white">Ionic support (Coming Soon)</p>
                                                    </div>
                                                    <div className="col right-border ms-3">
                                                        <img src="../assets/images/icon/ic_mobile.png" alt="" className="img-fluid mobile-first-UX-image-50" width="66px" height="66px" />
                                                        <h5 className="text-white">Mobile first UX</h5>
                                                        <p className="productDesc text-white">Highly customizable look and feel</p>
                                                    </div>
                                                    <div className="col ms-3">
                                                        <img src="../assets/image 49.png" alt="" className="img-fluid mobile-first-UX-image-50" width="66px" height="66px" />
                                                        <h5 className="text-white">Multi-modal feedback</h5>
                                                        <p className="productDesc text-white">Submit screenshots, voice to text, screen recording, or upload a file</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade browser-tab" id="profile-vertical" role="tabpanel"
                                        aria-labelledby="profile-vertical-tab">
                                        <div className="row h-450p">
                                            <div className="col-3">
                                                <div className="ps-2 position-relative iph">
                                                    <img src="../assets/images/home/mobile_Frame.png" className="img-fluid position-absolute" />
                                                </div>
                                            </div>
                                            <div className="col ms-5">
                                                <h1 className="text-white">Overview</h1>
                                                <p className="desc">Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut convallis
                                                    elementum, nisi erat molestie dui, nec lobortis nulla nisl et ex. Nam commodo,
                                                    magna ut dapibus egestas, dui mauris convallis quam, sed auctor sem leo vitae
                                                    metus. Suspendisse sit amet neque turpis. Suspendisse interdum purus nec neque
                                                    pharetra, nec dapibus massa interdum.</p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-column p-5 right-border">
                                                        <img src="../assets/images/icon/ic_mobile.png" alt="" className="img-fluid mobile-first-UX-image-50" width="66px" height="66px" />
                                                        <h5 className="text-white">Mobile App</h5>
                                                        <p className="productDesc text-white">Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut
                                                            convallis elementum, nisi erat </p>
                                                    </div>
                                                    <div className="d-flex flex-column p-5 right-border">
                                                        <img src="../assets/images/icon/ic_mobile.png" alt="" className="img-fluid mobile-first-UX-image-50" width="66px" height="66px" />
                                                        <h5 className="text-white">Mobile App</h5>
                                                        <p className="productDesc text-white">Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut
                                                            convallis elementum, nisi erat </p>
                                                    </div>
                                                    <div className="d-flex flex-column p-5">
                                                        <img src="../assets/images/icon/ic_mobile.png" alt="" className="img-fluid mobile-first-UX-image-50" width="66px" height="66px" />
                                                        <h5 className="text-white">Mobile App</h5>
                                                        <p className="productDesc text-white">Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut
                                                            convallis elementum, nisi erat </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact-vertical" role="tabpanel"
                                        aria-labelledby="contact-vertical-tab">
                                        <div className="row h-450p">
                                            <div className="col-3">
                                                <div className="ps-2 position-relative iph">
                                                    <img src="../assets/images/home/mobile_Frame.png" className="img-fluid position-absolute" />
                                                </div>
                                            </div>
                                            <div className="col ms-5">
                                                <h1 className="text-white">Overview</h1>
                                                <p className="desc">Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut convallis
                                                    elementum, nisi erat molestie dui, nec lobortis nulla nisl et ex. Nam commodo,
                                                    magna ut dapibus egestas, dui mauris convallis quam, sed auctor sem leo vitae
                                                    metus. Suspendisse sit amet neque turpis. Suspendisse interdum purus nec neque
                                                    pharetra, nec dapibus massa interdum.</p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-column p-5 right-border">
                                                        <img src="../assets/images/icon/ic_mobile.png" alt="" className="img-fluid mobile-first-UX-image-50" width="66px" height="66px" />
                                                        <h5 className="text-white">Mobile App</h5>
                                                        <p className="productDesc text-white">Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut
                                                            convallis elementum, nisi erat </p>
                                                    </div>
                                                    <div className="d-flex flex-column p-5 right-border">
                                                        <img src="../assets/images/icon/ic_mobile.png" alt="" className="img-fluid mobile-first-UX-image-50" width="66px" height="66px" />
                                                        <h5 className="text-white">Mobile App</h5>
                                                        <p className="productDesc text-white">Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut
                                                            convallis elementum, nisi erat </p>
                                                    </div>
                                                    <div className="d-flex flex-column p-5">
                                                        <img src="../assets/images/icon/ic_mobile.png" alt="" className="img-fluid mobile-first-UX-image-50" width="66px" height="66px" />
                                                        <h5 className="text-white">Mobile App</h5>
                                                        <p className="productDesc text-white">Mauris hendrerit lectus a porta molestie. Etiam congue, lacus ut
                                                            convallis elementum, nisi erat </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section id="capability" className="capability-sec">
                <div className="container">
                    <div className="py-5">
                        <div className="row">
                            <div className="col-12 px-0 text-center">
                                <h2>Capabilities</h2>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-12 px-0 text-center">
                                <p className="mx-md-5 px-md-5">Phasellus imperdiet mattis lectus eget auctor. Praesent varius elit venenatis ligula faucibus, id iaculis ligula luctus. Cras elementum hendrerit lectus, non sodales lacus tempor eget. Donec at dui orci.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-3 col-lg-3">
                                <div className="card p-4">
                                    <img src="../assets/images/icon/ic_mobile.png" alt="..." />
                                    <div className="card-body px-0">
                                        <h5 className="card-title">Unique selling point 1</h5>
                                        <p>Get live feedback from your users while they are in the experience and respond in real-time</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3">
                                <div className="card p-4">
                                    <img src="../assets/images/icon/ic_mobile.png" alt="..." />
                                    <div className="card-body px-0">
                                        <h5 className="card-title">Unique selling point 1</h5>
                                        <p>Get live feedback from your users while they are in the experience and respond in real-time</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3">
                                <div className="card p-4">
                                    <img src="../assets/images/icon/ic_mobile.png" alt="..." />
                                    <div className="card-body px-0">
                                        <h5 className="card-title">Unique selling point 1</h5>
                                        <p>Get live feedback from your users while they are in the experience and respond in real-time</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3">
                                <div className="card p-4">
                                    <img src="../assets/images/icon/ic_mobile.png" alt="..." />
                                    <div className="card-body px-0">
                                        <h5 className="card-title">Unique selling point 1</h5>
                                        <p>Get live feedback from your users while they are in the experience and respond in real-time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="explore" className="py-5 explore-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <h2 className="fw-bold">Explore the platform</h2>
                            <p>Phasellus imperdiet mattis lectus eget auctor. Praesent varius elit venenatis ligula faucibus, id iaculis ligula luctus. Cras elementum hendrerit lectus, non sodales lacus tempor eget. Donec at dui orci.</p>
                            <div className="d-flex">
                                <a href='https://www.youtube.com/@cuvo-info' target="_blank"><button className="btn btn-primary me-2 ms-0" type="submit">WATCH A DEMO</button></a>
                                <button className="btn btn-primary" type="submit">Early Adopters</button>
                            </div>
                        </div>
                        <div className="col-7">
                            <img src="../assets/export-img.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </div >

    )
}

export default ProductThree;