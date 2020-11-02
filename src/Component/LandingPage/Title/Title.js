import React, { useEffect } from "react";
import Styles from "./Title.css";
import $ from "jquery";

const Title = () => {
   useEffect(() => {
      $("#scroll").click(function () {
         $("html,body").animate(
            {
               scrollTop: $(".Featuredtext").offset().top,
            },
            "slow"
         );
      });
   });
   return (
      <div className="title">
         <div className="header">
            <div id="hero-text">
               <h1 className="titletext">
                  Brand By Agence is a global creative branding studio founded
                  in India. We make brands future-ready.
               </h1>
               <button className="button" id="abc">
                  Read more
               </button>
               <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_13"
                  data-name="Layer 13"
                  viewBox="0 0 500 500"
                  width="20%"
               >
                  <defs></defs>
                  <style type="text/css"></style>

                  <g className="clouds">
                     <path
                        className="cls-2"
                        d="M199.06,225.28a10.74,10.74,0,0,0-14.5-10.05A14.55,14.55,0,0,0,156.94,220a8.27,8.27,0,0,0-11.17,7.74"
                     />
                     <path
                        className="cls-2"
                        d="M338.35,241.64h-9.2a7.32,7.32,0,0,0-2.87-6.9,7.67,7.67,0,0,0-8.35-.88,11.26,11.26,0,0,0-21.37,3.71,6.4,6.4,0,0,0-8.65,6"
                     />
                  </g>
                  <g className="rocket">
                     <path
                        className="cls-3"
                        d="M268,321.45c2.37,0.07,13.2,1.39,22.34,18.72,0,0,22.15-30.56-12.72-46.75"
                     />
                     <path
                        className="cls-3"
                        d="M220.72,293.5c-34.87,16.19-12.66,46.67-12.66,46.67,9.14-17.32,20.39-18.4,22.76-18.47"
                     />

                     <path
                        className="cls-4"
                        d="M222.31,295.55s-14.14,13.88-14.49,41.92c0,0,9.79-18.3,23.48-16.33C231.3,321.14,221.86,313.43,222.31,295.55Z"
                     />
                     <path
                        className="cls-4"
                        d="M276,295.52s14.14,13.88,14.49,41.92c0,0-9.79-18.3-23.48-16.33C267,321.11,276.42,313.4,276,295.52Z"
                     />
                     <path
                        className="cls-3"
                        d="M252.21,196V184.79c0-.19,0-0.38,0-0.56a5,5,0,1,0-5.85.12c0,0.15,0,.29,0,0.44v11c-5.33,4.45-16.82,15.84-23.41,35.82h52.55C268.93,211.85,257.6,200.5,252.21,196Z"
                     />
                     <path
                        className="cls-3"
                        d="M271.09,314.38c11.24-32.86,10.91-58.14,6.1-76.84h-56c-4.81,18.7-5.15,44,6.09,76.82l4.79,12a11.73,11.73,0,0,0,10.62,6.77h13a11.72,11.72,0,0,0,10.62-6.77Zm-21.9-10.26a6.7,6.7,0,1,1,6.7-6.69A6.7,6.7,0,0,1,249.19,304.13Zm0-23.26a16.3,16.3,0,1,1,16.3-16.3A16.29,16.29,0,0,1,249.19,280.86Z"
                     />
                     <circle
                        className="cls-3"
                        cx="249.27"
                        cy="264.07"
                        r="16.3"
                     />
                     <circle
                        className="cls-6"
                        cx="249.19"
                        cy="297.43"
                        r="6.7"
                     />
                  </g>
                  <g className="thrust">
                     <path
                        className="cls-5"
                        d="M249.23,345.41a2.94,2.94,0,0,0-2.95,2.95v54.32a2.95,2.95,0,0,0,5.89,0V348.36A2.94,2.94,0,0,0,249.23,345.41Z"
                     />
                     <path
                        className="cls-5"
                        d="M238.75,344.08A2.94,2.94,0,0,0,235.8,347v17.51a2.95,2.95,0,0,0,5.89,0V347A2.94,2.94,0,0,0,238.75,344.08Z"
                     />
                  </g>
                  <g className="thrust2">
                     <path
                        className="cls-5"
                        d="M259.63,344.08a2.94,2.94,0,0,0-2.95,2.95v27a2.95,2.95,0,1,0,5.89,0V347A2.94,2.94,0,0,0,259.63,344.08Z"
                     />
                  </g>
               </svg>
            </div>
            <div className="scrolll"></div>
         </div>
         <img className="homw im" src={require("../../../home.png")} alt="" />
      </div>
   );
};

export default Title;
