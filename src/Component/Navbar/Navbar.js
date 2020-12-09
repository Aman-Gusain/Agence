import React, { useEffect } from "react";

import "./Navbar.css";
import $ from "jquery";
import Work from "../Work/Work";
import Yellowdoor from "../Work/Yellowdoor/Yellowdoor";
import Scrolltotop from "../Scrolltotop";
import Landingpage from "../Landingpage/Landingpage";
import About from "../About/About";
import Error from "../ErrorPage/Error";
import Contact from "../Contact/Contact";
import { Route } from "react-router";
import { NavLink, Switch, Link, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Navbar = () => {
   useEffect(() => {
      const overlay = document.getElementById("overlay");

      const closeM = document.getElementById("close");

      const openM = document.getElementById("open");

      const Link = document.getElementById("lin");

      openM.addEventListener("click", function () {
         $(window).scrollTop(0);
         setTimeout(() => {
            overlay.classList.add("show");
         }, 50);
      });
      Link.addEventListener("click", function () {
         overlay.classList.remove("show");
      });
      window.addEventListener("scroll", function () {
         overlay.classList.remove("show");
      });
      closeM.addEventListener("click", function () {
         overlay.classList.remove("show");
      });
   });

   return (
      <div className="nav-bar">
         <Link to="/home">
            <img
               className="log"
               src={require("./agence-logo-black.png")}
               alt=""
            />
         </Link>
         <nav id="overlay" className="over-lay">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            <svg
               className="cross"
               id="close"
               width="33"
               height="33"
               viewBox="0 0 18 17"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M1 2L17 15M1 15L17 2"
                  stroke="#f5f5f5f5"
                  strokeWidth="3"
               />
            </svg>

            <ul id="lin">
               <li>
                  <NavLink to="/home/">Home</NavLink>
                  {/* <span>Let's get start here</span> */}
               </li>
               <li>
                  <NavLink to="/about">About</NavLink>
                  {/* <span>Find out what you need</span> */}
               </li>
               <li>
                  <NavLink to="/work">Work</NavLink>
                  {/* <span>See what i've done</span> */}
               </li>
               <li>
                  <NavLink to="/contact">Contact</NavLink>
                  {/* <span>Let me introduce myself</span> */}
               </li>
            </ul>
         </nav>

         <div className="container000">
            <svg
               className="menu"
               id="open"
               width="33"
               height="33"
               viewBox="0 0 19 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M0 2H18.5M0 8H18.5M0 14.5H18.5"
                  stroke="#000000"
                  strokeWidth="3"
               />
            </svg>
         </div>
         <Route
            render={({ location }) => (
               <Scrolltotop>
                  <TransitionGroup>
                     <CSSTransition
                        key={location.key}
                        timeout={600}
                        classNames="page"
                     >
                        <Switch location={location}>
                           <Route exact path="/">
                              <Redirect to="/home" />
                           </Route>
                           <Route
                              path="/Agence"
                              exact
                              component={Landingpage}
                           />

                           <Route path="/home" exact component={Landingpage} />
                           <Route path="/about" exact component={About} />
                           <Route path="/contact" exact component={Contact} />
                           <Route
                              path="/yellowdoor"
                              exact
                              component={Yellowdoor}
                           />
                           <Route path="/work" exact component={Work} />
                           <Route component={Error} />
                        </Switch>
                     </CSSTransition>
                  </TransitionGroup>
               </Scrolltotop>
            )}
         />
      </div>
   );
};

export default Navbar;
