import React, { useEffect } from "react";
import Contact from "../Contact/Contact";
import Styles from "./Navbar.css";
import LandingPage from "../LandingPage/Landingpage";
import $ from "jquery";
import Scrolltotop from "../Scrolltotop";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   useEffect(() => {
      // NAVIGATION LOGO SCROLL TOP
      $(".logo").on("click", function (e) {
         e.preventDefault();
         $(".nav-toggle").removeClass("open");
         $(".menu-left").removeClass("collapse");
         $("html, body").animate(
            {
               scrollTop: 0,
            },
            750,
            "easeInOutQuad"
         );
      });
      // LINKS TO ANCHORS
      $('a[href^="#"]').on("click", function (event) {
         var $target = $(this.getAttribute("href"));

         if ($target.length) {
            event.preventDefault();
            $("html, body").stop().animate(
               {
                  scrollTop: $target.offset().top,
               },
               750,
               "easeInOutQuad"
            );
         }
      });

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

         // If they scrolled down and are past the navbar, add class .nav-up.
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
                  <a href="/" className="logo">
                     Agnece
                  </a>
                  <a aria-label="mobile menu" className="nav-toggle">
                     <span></span>
                     <span></span>
                     <span></span>
                  </a>
                  <ul className="menu-left">
                     <li>
                        <NavLink to="/home">About</NavLink>
                     </li>
                     <li>
                        <NavLink to="/H">Work</NavLink>
                     </li>
                     <li>
                        <NavLink to="/contact">Contact</NavLink>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>
         <Scrolltotop>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" exact component={LandingPage} />

            <Route path="/contact" exact component={Contact} />
         </Scrolltotop>
      </div>
   );
};

export default Navbar;
