import React from "react";
import './Banner.css'

function Banner() {
    return  <div className="Banner">      
                <img className="Banner_img" src="./IMG.png" alt="BannerImg" /> 
                <div className="dark_banner"></div>
                <div className="banner_txt">Chez vous, partout et ailleurs</div>
            </div>
}

export default Banner; 