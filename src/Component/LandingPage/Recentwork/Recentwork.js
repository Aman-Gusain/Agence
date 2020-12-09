import React, { useEffect } from "react";
import "./Recentwork.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Recentwork = () => {
   useEffect(() => {
      AOS.init({
         duration: 1400,
      });
   }, []);
   return (
      <div className="Recentwork">
         <h2 className="section-heading">
            <span className="left" data-aos="fade-left"></span> RECENT WORK{" "}
            <span className="right" data-aos="fade-right"></span>
         </h2>
         <div className="row">
            <div className="container-work">
               <div className="test_box box-01 col-xs-12 col-md-12">
                  <div className="inner">
                     <Link to="/yellowdoor" className="test_click">
                        <div className="flex_this">
                           <span className="test_title">
                              Yellow Door - Branding and Designing
                           </span>
                        </div>
                     </Link>
                  </div>
               </div>
               <div className="test_box box-02 col-xs-12 col-md-6">
                  <div className="inner">
                     <Link to="/yellowdoor" className="test_click">
                        <div className="flex_this">
                           <span className="test_title">
                              Yellow Door - Branding and Designing
                           </span>
                        </div>
                     </Link>
                  </div>
               </div>
               <div className="test_box box-03 col-xs-12 col-md-6">
                  <div className="inner">
                     <Link to="/yellowdoor" className="test_click">
                        <div className="flex_this">
                           <span className="test_title">
                              Yellow Door - Branding and Designing
                           </span>
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         <Link to="/work">
            <button className="button">Show more</button>
         </Link>
      </div>
   );
};

export default Recentwork;
