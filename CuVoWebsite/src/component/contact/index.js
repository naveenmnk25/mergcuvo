import React from 'react';
import './index.css';
import BookDemoForm from '../book-demo/BookDemoForm';

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="contact-us-pT-45">
                    <div className="row gx-5">
                        <div className="col-lg-6 col-md-8 col-8 mb-md-0 mb-lg-0 col-sm-6">
                            <div className="contact-des">
                                <div>
                                    <h1 className="text-dark heading contact-us-text">Contact Us</h1>
                                </div>
                                <div>
                                    <p className="contacttext">Quisque ut mauris a metus rutrum ultrices sit amet sed tellus. Cras molestie, lectus in commodo aliquet, odio mi aliquam enim</p>
                                </div>
                            </div>
                            <BookDemoForm btnPos="center"/>
                        </div>
                        <div className="col-lg-6 col-md-4 col-4 mb-md-0 mb-lg-0 col-sm-6">
                            <img src="../assets/map-image.jpg" className="img-fluid img-fluid-map-image" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div >

    )
}

export default Contact;