import React from "react";

const SuccessPopup = ({ show }) => {
  return show ? <div className="success-popup">Successfully Integrated</div> : null;
};

export default SuccessPopup;
