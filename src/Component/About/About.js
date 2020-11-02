import React, { useEffect } from "react";
import Styles from "./About.css";
import $ from "jquery";

const About = () => {
   useEffect(() => {
      $(".arrow").click(function () {
         $("html,body").animate(
            {
               scrollTop: $("#about-2").offset().top,
            },
            "slow"
         );
      });
   });
   return (
      <main>
         <div className="About">
            <div className="arrow">
               <div className="scrolll"></div>
            </div>
            <section id="about">
               <img
                  className="abouimg"
                  src={require("../../waters.png")}
                  alt=""
               />
               <div className="container-fluid abv">
                  <div className="row">
                     <div className="col-sm-12 col-lg-12">
                        <div className="la">
                           <div className="la-inner"></div>
                        </div>
                        <div className="ab-4"></div>
                        <div className="a-state">
                           <div className="conten">
                              <h3>About us </h3>
                              <h1 className="abouth">
                                 {" "}
                                 We Specialize in Brand Development, Graphic
                                 Design and Visual Content Creation
                              </h1>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section id="about-2" className="aou">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="ab-block ab3">
                           <h2>
                              We create communications, products, and
                              environments that transform brands, drive
                              business, and improve people’s lives.
                           </h2>
                           <h2>
                              We have our own production house & use our
                              expertise to create the most exciting content for
                              your brand.
                           </h2>
                           <br />

                           <h3>What we do</h3>

                           <div className="n-menu n-two">
                              <ul className="n-two">
                                 <li>Brand Creation</li>
                                 <li>Web Development</li>
                                 <li>Social Media Marketing</li>
                                 <li>Content Creation</li>
                              </ul>
                           </div>

                           <div className="n-menu n-two">
                              <ul>
                                 <li>eCommerce</li>
                                 <li>User Experience</li>
                                 <li>Logo Creation</li>
                                 <li>Event Materials</li>
                              </ul>
                           </div>
                        </div>
                     </div>

                     <div className="col-md-6 pop">
                        <div className="ab-l">S</div>
                        <div className="n in-view">
                           <div className="ab-1">
                              <div className="reveal"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section id="about-2">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-sm-12 col-lg-6 pop">
                        <div className="col-md-6">
                           <div className="ab-l">p</div>
                           <div className="n in-view">
                              <div className="ab-1">
                                 <div className="reveal"></div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-sm-12 col-lg-6">
                        <div className="ab-block abb-2">
                           <h2>
                              Since 2010 we've been designing and delivering
                              talior-made, effective websites & social
                              campaigns. We focus on functionality, creating
                              meaningful relationships for your brand.
                           </h2>
                           <h2>
                              We are creative thinkers, problem solvers, and
                              challenge seekers. We create experiences that will
                              move your audience.
                           </h2>
                           <br />

                           <p>
                              <button href="#" className="button">
                                 View our projects
                              </button>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </main>
   );
};

export default About;
