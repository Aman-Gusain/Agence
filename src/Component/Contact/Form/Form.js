import React, { useEffect } from "react";
import Styles from "./Form.css";
import $ from "jquery";
const Form = () => {
   useEffect(() => {
      (function () {
         var floatingLabel;

         floatingLabel = (function () {
            function floatingLabel(form, options) {
               var event, input, label, _i, _j, _len, _len1, _ref, _ref1;
               if (options == null) {
                  options = {};
               }
               if (!form) {
                  return;
               }
               options.focusClass || (options.focusClass = "focus");
               options.activeClass || (options.activeClass = "active");
               options.errorClass || (options.errorClass = "error");
               form.classList.add("has-floated-label");
               _ref = form.querySelectorAll("label");
               for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                  label = _ref[_i];
                  if (
                     !(input = document.querySelector(
                        "#" + label.getAttribute("for")
                     ))
                  ) {
                     return;
                  }
                  _ref1 = ["keyup", "input", "change"];
                  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                     event = _ref1[_j];
                     input.addEventListener(event, function () {
                        this.parentNode.classList.remove(options.errorClass);
                        return this.parentNode.classList.toggle(
                           options.activeClass,
                           !!this.value
                        );
                     });
                  }
                  input.addEventListener("focus", function () {
                     return this.parentNode.classList.add(options.focusClass);
                  });
                  input.addEventListener("blur", function () {
                     return this.parentNode.classList.remove(
                        options.focusClass
                     );
                  });
                  input.parentNode.classList.toggle(
                     options.activeClass,
                     !!input.value
                  );
               }
            }

            return floatingLabel;
         })();

         window.floatingLabel = new floatingLabel(
            document.querySelector(".form")
         );
      }.call(this));
   });
   return (
      <div id="wrapper">
         <h1>Get in Touch</h1>
         <p>
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you
         </p>
         <div className="form">
            <form action="" className="form">
               <p className="field required half">
                  <label className="label required" htmlFor="name">
                     Name
                  </label>
                  <input
                     className="text-input"
                     id="name"
                     name="name"
                     required
                     type="text"
                  ></input>
               </p>
               <p className="field required half">
                  <label className="label" htmlFor="email">
                     E-mail
                  </label>
                  <input
                     className="text-input"
                     id="email"
                     name="email"
                     required
                     type="email"
                  ></input>
               </p>
               <p className="field">
                  <label className="label" htmlFor="message">
                     Message
                  </label>
                  <textarea
                     className="textarea"
                     cols="50"
                     id="message"
                     name="message"
                     required
                     rows="4"
                  ></textarea>
               </p>
               <p className="field">
                  <input
                     className="button"
                     type="submit"
                     value="Send message"
                  ></input>
               </p>
            </form>
         </div>
      </div>
   );
};

export default Form;
