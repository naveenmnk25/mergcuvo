import React from 'react';
import './index.css';
import BookDemoForm from '../book-demo/BookDemoForm';

const BookDemo = () => {
    return (
        <section id="form">
            <div className="mx-92">
                <div className=" px-md-0 px-2 my-72">
                    <div className="row align-items-center h-572p">
                        <div className="col-md-6 col-lg-6 col-12 mb-md-0 mb-lg-0 mb-3">
                            <div className="d-flex flex-column d-md-block d-none">
                                <img src="../assets/img_trynow.png" className="img-fluid img-fluid-group-2319" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-12 mb-md-0 mb-lg-0 mb-3 form order-first order-md-last">
                            <div className="d-flex flex-column d-md-block d-none">
                                <h2 className="trynow">Book Demo</h2>
                                <p className="trynowdesc">Lower customer support costs, Improve retention, increase actionability of feedback, and save on product development costs.</p>
                            </div>
                            <BookDemoForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookDemo;