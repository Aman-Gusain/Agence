import React, { useEffect } from "react";
import Styles from "./Form.css";
import $ from "jquery";

const Form = () => {
   return (
      <div className="Forma">
         <div id="container00">
            <div className="he">
               <h1> Get in Touch </h1>
            </div>

            <form action="#" method="post" id="contact_form">
               <div className="name">
                  <label className="con" htmlFor="name"></label>
                  <input
                     className="contact"
                     type="texta"
                     placeholder="Your Name"
                     name="name"
                     id="name_input"
                     required
                  />
               </div>
               <div className="email">
                  <label className="con" htmlFor="email"></label>
                  <input
                     className="contact"
                     type="emaila"
                     placeholder="Your e-mail "
                     name="email"
                     id="email_input"
                     required
                  />
               </div>
               <div className="telephone">
                  <label className="con" htmlFor="name"></label>
                  <input
                     className="contact"
                     type="texta"
                     placeholder="Your number"
                     name="telephone"
                     id="telephone_input"
                     required
                  />
               </div>
               <div className="message">
                  <label className="con" htmlFor="message"></label>
                  <textarea
                     className="contact"
                     name="message"
                     placeholder="I'd like to chat about"
                     id="message_input"
                     cols="30"
                     rows="5"
                     required
                  ></textarea>
               </div>
               <div className="submit">
                  <button
                     className="button"
                     type="submit"
                     value="Send Message"
                     id="form_button"
                  >
                     Submit
                  </button>
               </div>
            </form>
         </div>
         <img
            className="contimg"
            src={require("../../../contact.png")}
            alt=""
         />
      </div>
   );
};

export default Form;
