import React, { useEffect } from "react";
import log from "./agence-logo-black.png";
import Styles from "./Navbar.css";
import $ from "jquery";
import Work from "../Work/Work";
import Yellowdoor from "../Work/Yellowdoor/Yellowdoor";
import Scrolltotop from "../Scrolltotop";
import Landingpage from "../Landingpage/Landingpage";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { Route } from "react-router";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
   useEffect(() => {
      // TOGGLE HAMBURGER & COLLAPSE NAV
      $(".nav-toggle").on("click", function () {
         $(this).toggleClass("open");
         $(".menu-left").toggleClass("collapse");
      });
      // REMOVE X & COLLAPSE NAV ON ON CLICK
      $(".menu-left a").on("click", function () {
         $(".nav-toggle").removeClass("open");
         $(".menu-left").removeClass("collapse");
      });
      $(".logo").on("click", function () {
         $(".nav-toggle").removeClass("open");
         $(".menu-left").removeClass("collapse");
      });
      // SHOW/HIDE NAV

      // Hide Header on on scroll down
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $("header").outerHeight();

      $(window).scroll(function (event) {
         didScroll = true;
      });

      setInterval(function () {
         if (didScroll) {
            hasScrolled();
            didScroll = false;
         }
      }, 250);

      function hasScrolled() {
         var st = $(window).scrollTop();

         // Make sure they scroll more than delta
         if (Math.abs(lastScrollTop - st) <= delta) return;

         // If they scrolled down and are past the navbar, add className .nav-up.
         // This is necessary so you never see what is "behind" the navbar.
         if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $("header").removeClass("show-nav").addClass("hide-nav");
            $(".nav-toggle").removeClass("open");
            $(".menu-left").removeClass("collapse");
         } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
               $("header").removeClass("hide-nav").addClass("show-nav");
            }
         }

         lastScrollTop = st;
      }
   });

   return (
      <div>
         <header>
            <div className="container">
               <nav id="navigation">
                  <Link to="/Agence" className="logo">
                     <img className="log" src={log} alt="" />
                  </Link>
                  <h2 className="Name">Agence</h2>
                  <a aria-label="mobile menu" className="nav-toggle">
                     <span></span>
                     <span></span>
                     <span></span>
                  </a>
                  <ul className="menu-left">
                     <li>
                        <NavLink to="/about">About</NavLink>
                     </li>
                     <li>
                        <NavLink to="/work">Work</NavLink>
                     </li>
                     <li>
                        <NavLink to="/contact">Contact</NavLink>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>
         <Scrolltotop>
            {/* <Route path="/Agence" exact component={LandingPage} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" exact component={LandingPage} /> */}
            <Route path="/" exact component={Landingpage} />
            <Route path="/Agence" exact component={Landingpage} />
            <Route path="/work" exact component={Work} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/work/yellowdoor" exact component={Yellowdoor} />
         </Scrolltotop>
      </div>
   );
};

export default Navbar;
