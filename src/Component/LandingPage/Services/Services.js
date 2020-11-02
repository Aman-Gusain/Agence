import React, { useEffect } from "react";
import Styles from "./Services.css";
import $ from "jquery";

const Services = () => {
   useEffect(() => {
      // $(".faet").click(function () {
      //    $(".feat").removeClass("checked");
      // });
   });
   return (
      <div className="Services">
         <h2 className="section-heading">Our Capabalities</h2>
         <div className="tabs">
            <input
               className="feat"
               type="radio"
               id="tab1"
               name="tab-control"
               defaultChecked
            />
            <input className="feat" type="radio" id="tab2" name="tab-control" />
            <input className="feat" type="radio" id="tab3" name="tab-control" />
            <input className="feat" type="radio" id="tab4" name="tab-control" />
            <ul>
               <li title="Research">
                  <label htmlFor="tab1" role="button">
                     <i className="fas fa-search-dollar"></i>
                     <br />
                     <span>Research</span>
                  </label>
               </li>
               <li title="Brand Identity">
                  <label htmlFor="tab2" role="button">
                     <i className="fas fa-fingerprint"></i>

                     <br />
                     <span>Brand Identity</span>
                  </label>
               </li>
               <li title="Design">
                  <label htmlFor="tab3" role="button">
                     <i className="fas fa-laptop-code"></i>
                     <br />
                     <span>Design</span>
                  </label>
               </li>{" "}
               <li title="Production">
                  <label htmlFor="tab4" role="button">
                     <i className="fas fa-industry"></i>
                     <br />
                     <span>Production</span>
                  </label>
               </li>
            </ul>

            <div className="slider1">
               <div className="indicator"></div>
            </div>
            <div className="content">
               <section>
                  <div className="features-image">
                     <img
                        src={require("../../Navbar/circle-cropped (1).png")}
                        alt=""
                     />
                  </div>
                  <div className="features-text">
                     <h2 className="animate__animated animate__bounce">
                        Digital X-Rays
                     </h2>
                     <p>
                        Dr Albazzaz, Dr Javed and Dr Safi bring the most up to
                        date dental technology to their West Chicago practice.
                        They use digital x-rays which require less radiation and
                        provide improved diagnostic quality to every patient
                        appointment.
                     </p>
                     <button className="button">Read more</button>
                  </div>
               </section>
               <section>
                  <div className="features-image">
                     <img
                        src={require("../../Navbar/circle-cropped (1).png")}
                        alt=""
                     />
                  </div>
                  <div className="features-text">
                     <h2 className="animate__animated animate__bounce">
                        Digital X-Rays
                     </h2>
                     <p>
                        From ethnographies to in-depth interviews to focus
                        groups, we conduct research that uncovers the
                        behaviours, desires and motivations that drive your
                        target audience.
                     </p>
                     <button className="button">Read more</button>
                  </div>
               </section>
               <section>
                  <div className="features-image">
                     <img
                        src={require("../../Navbar/circle-cropped (1).png")}
                        alt=""
                     />
                  </div>
                  <div className="features-text">
                     <h2 className="animate__animated animate__bounce">
                        Digital X-Rays
                     </h2>
                     <p>
                        From ethnographies to in-depth interviews to focus
                        groups, we conduct research that uncovers the
                        behaviours, desires and motivations that drive your
                        target audience.
                     </p>
                     <button className="button">Read more</button>
                  </div>
               </section>
               <section>
                  <div className="features-image">
                     <img
                        src={require("../../Navbar/circle-cropped (1).png")}
                        alt=""
                     />
                  </div>
                  <div className="features-text">
                     <h2 className="animate__animated animate__bounce">
                        Digital X-Rays
                     </h2>
                     <p>
                        From ethnographies to in-depth interviews to focus
                        groups, we conduct research that uncovers the
                        behaviours, desires and motivations that drive your
                        target audience.
                     </p>
                     <button className="button">Read more</button>
                  </div>
               </section>
            </div>
         </div>
      </div>
   );
};

export default Services;
