import React from "react";
import Styles from "./Footer.css";

const Footer = () => {
   return (
      <footer>
         <div className="container2">
            <div className="box">
               <div className="icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
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
         <div className="footer_container">
            <div className="footerLogo">
               <p>DRAGON NETWORK</p>
            </div>
            <div className="social_media">
               <a href="#">
                  <i className="fab fa-facebook-f fa-lg"></i>
               </a>
               <a href="#">
                  <i className="fab fa-twitter fa-lg"></i>
               </a>
               <a href="#">
                  <i className="fab fa-instagram fa-lg"></i>
               </a>
               <a href="#">
                  <i className="fab fa-youtube fa-lg"></i>
               </a>
               <a href="#">
                  <i className="fab fa-linkedin-in fa-lg"></i>
               </a>
            </div>
            <div className="copyright">
               <p>Aman Gusain 2020</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
