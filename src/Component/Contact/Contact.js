import React from "react";
import Styles from "./Contact.css";
import Footer from "../Footer/Footer";
import Form from "./Form/Form";
import Envolope from "./Envolope/Envolope";

const Contact = () => {
   return (
      <div className="contactme">
         <Envolope />
         <Form />
         {/* <Footer /> */}
      </div>
   );
};

export default Contact;
