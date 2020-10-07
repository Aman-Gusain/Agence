import React from "react";
import About from "./About/About";
import Clientel from "./Clientel/Clientel";
import Features from "./Features/Features";
import Clients from "./Clients/Clients";
import Styles from "./Landingpage.css";
const Landingpage = () => {
   return (
      <div className="landingpage">
         <About />
         <Clientel />
         <Features />

         <Clients />
      </div>
   );
};

export default Landingpage;
