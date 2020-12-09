import React, { useEffect } from "react";
import "./About.css";
import $ from "jquery";
import { Link } from "react-router-dom";

const About = () => {
   useEffect(() => {
      $(".arrow").click(function () {
         $("html,body").animate(
            {
               scrollTop: $("#about-3").offset().top,
            },
            "slow"
         );
      });
   });

   return (
      <main className="pages">
         <div className="About">
            <div className="arrow">
               <div className="scrolll bc"></div>
            </div>
            <section id="about">
               <img
                  className="abouimg "
                  src={require("../../Agence Character phone (1).png")}
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

            <section id="about-3">
               <div className="container-fluid">
                  <div className="row ab">
                     <div className="col-md-4 sm-6 xs-12">
                        <h1>Research</h1>
                        <p>
                           From ethnographies to in-depth interviews to focus
                           groups, we conduct research that uncovers the
                           behaviours, desires and motivations that drive your
                           target audience.
                        </p>
                     </div>
                     <div className="col-md-4 sm-6 xs-12">
                        <h1>Strategy</h1>
                        <p>
                           This is the starting point for success. We shed light
                           on the most unique part of your business and develop
                           a strategic foundation that guides every part of the
                           brand process.
                        </p>
                     </div>
                     <div className="col-md-4 sm-6 xs-12">
                        <h1>Brand Identity</h1>
                        <p>
                           We move from our strategic foundation into a rich
                           visual identity that gets the world talking and
                           consumers engaging. We’re curious when we explore,
                           and brave where we land.
                        </p>
                     </div>
                  </div>
                  <div className="row ab">
                     <div className="col-md-4 sm-6 xs-12">
                        <h1>Design</h1>
                        <p>
                           Starting with a vision for the user experience, our
                           digital team concept designs and builds world-class
                           experiences — from e-commerce to marketing sites to
                           apps, and everything in between.
                        </p>
                     </div>
                     <div className="col-md-4 sm-6 xs-12">
                        <h1>Production</h1>
                        <p>
                           We show the world what brands stand for by producing
                           content that people want to engage with - everything
                           from illustration, photo, video, motion, animation,
                           and audio.
                        </p>
                     </div>
                     <div className="col-md-4 sm-6 xs-12">
                        <h1>Development</h1>
                        <p>
                           We don’t just design websites & apps, we build them.
                           We offer full-stack, creative technology solutions
                           that achieve the best possible digital experience for
                           each brand.
                        </p>
                     </div>
                  </div>
               </div>
            </section>
            <section id="about-2">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-sm-12 col-lg-6 pop">
                        <img
                           className="tog"
                           src={require("../../lab illustration final.png")}
                           alt=""
                        />
                        <img
                           className="lab1"
                           src={require("../../lab elements3 (1).png")}
                           alt=""
                        />
                     </div>

                     <div className="col-sm-12 col-lg-6">
                        <div className="ab-block abb-2">
                           <h2>
                              Since 2019 we've been designing and delivering
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
                              <Link to="/work">
                                 <button className="button">
                                    View our projects
                                 </button>
                              </Link>
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
