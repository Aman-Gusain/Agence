import React from "react";
import Styles from "./About.css";
import vmp4 from "./Video/source.mp4";
import vwebm from "./Video/source.webm";
import vogv from "./Video/source.ogv";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
   return (
      <div data-aos="zoom-in" data-aos-duration="1000">
         <div className="video-hero jquery-background-video-wrapper demo-video-wrapper">
            <video className="jquery-background-video" autoPlay muted loop>
               <source src={vmp4} type="video/mp4"></source>
               <source src={vwebm} type="video/webm"></source>
               <source src={vogv} type="video/ogvy"></source>
            </video>
            <div className="video-overlay"></div>
            <div className="page-width">
               <div className="video-hero--content">
                  <h1 className="intr">
                     Knockout your competition with the power of design and code
                  </h1>
               </div>
            </div>
         </div>

         <div id="content">
            <h3>Easy Background Videos</h3>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
               ut dolor vel nunc tempor porttitor nec accumsan ex. Donec
               dignissim ipsum id dolor imperdiet ultrices eu vitae ante.
               Integer metus neque, pellentesque et porta et, scelerisque at
               ligula. Vestibulum ante ipsum primis in faucibus orci luctus et
               ultrices posuere cubilia curae
            </p>
         </div>
      </div>
   );
};

export default About;
