import React from 'react';
import './index.css';
import BrandInputBox from '../common/BrandInputBox';

const BookDemoForm = (props) => {
    const {btnPos} = props;
    return (
        <form>
            <div className="row mb-2">
                <div className="col-md-6 col-lg-6 col-12">
                    <BrandInputBox type="text" inputFieldName="firstName" label="First name" placeHolderTxt="Enter first name"/>
                </div>
                <div className="col-md-6 col-lg-6 col-12">
                    <BrandInputBox type="text" inputFieldName="lastName" label="Last name" placeHolderTxt="Enter last name"/>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-6 col-lg-6 col-12">
                    <BrandInputBox type="text" inputFieldName="companyName" label="Company Name" placeHolderTxt="Enter company name"/>
                </div>
                <div className="col-md-6 col-lg-6 col-12">
                    <BrandInputBox type="text" inputFieldName="website" label="Website" placeHolderTxt="Enter website"/>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-6 col-lg-6 col-12">
                    <BrandInputBox type="text" inputFieldName="email" label="Email Address" placeHolderTxt="Enter email address"/>
                </div>
                <div className="col-md-6 col-lg-6 col-12">
                    <BrandInputBox type="number" inputFieldName="phone" label="Phone Number" placeHolderTxt="Enter phone number"/>
                </div>
            </div>
            <div className="d-flex mb-3">
                <input className="brand-checkbox" type="checkbox" value="" id="privacyCheck" checked />
                <label className="brand-checkbox-label" for="privacyCheck">
                    I agree to the <a href="/">Privacy and Terms and Conditions</a> of this site.
                </label>
            </div>
            {btnPos && btnPos == 'center' ?
                <div style={{textAlign:'center'}}>
                    <button className="btn btn-primary book-demo-submt-btn" type="submit">Submit</button>
                </div>
                :
                <div>
                    <button className="btn btn-primary book-demo-submt-btn" type="submit">Submit</button>
                </div>
            }
        </form>
    )
}

export default BookDemoForm;