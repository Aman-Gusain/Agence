import React, { Component, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import Styles from "./Clients.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from "./circle-cropped (1).png";

import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default class Clients extends Component {
   render() {
      var settings = {
         dots: true,
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         pauseOnHover: true,
      };
      return (
         <div className="clients">
            <h1>OUR CLIENTS</h1>
            <div>
               <Slider {...settings}>
                  <div>
                     <img className="lgo" src={logo} alt="" />
                  </div>
                  <div>
                     <img className="lgo" src={logo} alt="" />
                  </div>
                  <div>
                     <img className="lgo" src={logo} alt="" />
                  </div>
                  <div>
                     <img className="lgo" src={logo} alt="" />
                  </div>
                  <div>
                     <img className="lgo" src={logo} alt="" />
                  </div>
                  <div>
                     <img className="lgo" src={logo} alt="" />
                  </div>
               </Slider>
            </div>
         </div>
      );
   }
}
