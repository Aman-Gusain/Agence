import React, { useEffect } from "react";
import Styles from "./Scrollbar.css";

const Scrollbar = () => {
   useEffect(() => {
      var bar = document.querySelector(".progress div");
      window.addEventListener("scroll", function () {
         var max = document.body.scrollHeight - window.innerHeight;
         var percent = (window.pageYOffset / max) * 100;
         bar.style.width = percent + "%";
      });
   });
   return (
      <div className="progress">
         <div></div>
      </div>
   );
};
export default Scrollbar;
