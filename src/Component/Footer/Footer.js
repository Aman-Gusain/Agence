import React, { useEffect } from "react";
import Styles from "./Footer.css";
import $ from "jquery";

const Footer = () => {
   useEffect(() => {
      $(".n").blur(function () {
         if ($(this).val()) {
            $(".nl").css("display", "none");
         } else {
            $(".nl").css("display", "block");
         }
      });
      $(".e").blur(function () {
         if ($(this).val()) {
            $(".el").css("display", "none");
         } else {
            $(".el").css("display", "block");
         }
      });
   });
   return (
      <main>
         <footer>
            <div className="container0">
               <h2 className="footerhead">Subscribe to our newsletter</h2>
               <form
                  action="none"
                  // method="POST"
                  // enctype="multipart/form-data"
                  // name="EmailForm"
               >
                  <div className="group">
                     <input className="input n" type="text" />
                     <span className="highlight"></span>

                     <span className="bar"></span>
                     <label className="label nl">Name</label>
                  </div>
                  <div className="group">
                     <input className="input e" type="email" />
                     <span className="highlight"></span>

                     <span className="bar"></span>
                     <label className="label el">Email</label>
                  </div>
               </form>
               <button className="button x">Submit</button>
            </div>
            <div className="footer_container">
               <div className="footerLogo">
                  <h4>Agence © 2020</h4>
               </div>
               <div className="copyright">
                  <div className="container2">
                     <div className="box">
                        <div className="icon">
                           <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                           ></i>
                           <span>Our Location</span>
                        </div>
                        <div className="details">India</div>
                     </div>
                     <div className="box">
                        <div className="icon">
                           <i className="fa fa-phone" aria-hidden="true"></i>
                           <span>Call Us</span>
                        </div>
                        <div className="details">+91 123 456 7890</div>
                     </div>
                     <div className="box">
                        <div className="icon">
                           <i className="fa fa-envelope" aria-hidden="true"></i>
                           <span>Write Us</span>
                        </div>
                        <div className="details">info@gmail.com</div>
                     </div>
                  </div>
               </div>
               <div className="social_media">
                  <a href="#">
                     <i className="fab fa-facebook-f fa-2x"></i>
                  </a>
                  <a href="#">
                     <i className="fab fa-twitter fa-2x"></i>
                  </a>
                  <a href="#">
                     <i className="fab fa-instagram fa-2x"></i>
                  </a>
                  <a href="#">
                     <i className="fab fa-youtube fa-2x"></i>
                  </a>
                  <a href="#">
                     <i className="fab fa-linkedin-in fa-2x"></i>
                  </a>
               </div>
            </div>
         </footer>
      </main>
   );
};

export default Footer;
