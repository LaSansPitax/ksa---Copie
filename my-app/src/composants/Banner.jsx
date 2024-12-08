import React from "react";
import "../styles/Banner.css";

function Banner({ image, hideText = false, customClassName = "" }) {
  return (
    <div className={`Banner ${customClassName}`}>
      <img className={`Banner_img ${customClassName}`} src={image} alt="Banner" />
      {!hideText && <span className="banner_txt">Chez vous, partout et ailleurs</span>}
    </div>
  );
}

export default Banner;