import React from 'react';
import './index.css';

const BrandInputBox = (props) => {
    const {type, inputFieldName, label, placeHolderTxt} = props;
    return (
        <>
            <label for={inputFieldName} className="brand-label">{label}</label>
            <input id={inputFieldName} name={inputFieldName} type={type} placeholder={placeHolderTxt} aria-label={placeHolderTxt}
            className="form-control brand-input-box" />
            <div id={`err-${inputFieldName}`} class="brand-error-msg">&nbsp;</div>
        </>
    )
}

export default BrandInputBox;