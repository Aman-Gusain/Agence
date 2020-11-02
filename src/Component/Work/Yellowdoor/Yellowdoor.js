import React, { useEffect } from "react";
import Styles from "./Yellowdoor.css";
import $ from "jquery";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
const Yellowdoor = () => {
   const [toggler, setToggler] = useState(false);
   return (
      <div className="yellowdoor">
         <section className="section-a">
            <div className="container1">
               <div>
                  <h2>Yellowdoor</h2>
                  <p>
                     Yellow Door advertising is an advertising agency providing
                     full-scale marketing and advertising services. We have
                     consistently garnered successful outcomes for clients
                     through award-winning creative and aggressive marketing
                     strategies.
                  </p>
                  <hr />
                  <div className="details">
                     <div className="service">
                        <h5>Service</h5>
                        <h6>branding and design</h6>
                     </div>
                     <div className="client">
                        <h5>client</h5>
                        <h6>Yellowdoor</h6>
                     </div>
                     <div className="year">
                        <h5>year</h5>
                        <h6>2019</h6>
                     </div>
                  </div>
               </div>
               <img src="https://i.ibb.co/37Y74kv/showcase.jpg" alt="" />
            </div>
         </section>

         <section id="about" className="section-b">
            <div className="overlay">
               <div className="section-b-inner py-5"></div>
            </div>
         </section>

         <section className="section-c">
            <div className="gallery">
               <a onClick={() => setToggler(!toggler)} className="big">
                  <img src="https://i.ibb.co/CHLBZnp/gal2323.jpg" alt="" />
               </a>
               <a onClick={() => setToggler(!toggler)} className="big">
                  <img src="https://i.ibb.co/4pBbhfY/gal39834.jpg" alt="" />
               </a>
               <a onClick={() => setToggler(!toggler)} className="big">
                  <img src="https://i.ibb.co/xSnHP7g/gal43884.jpg" alt="" />
               </a>
               <a onClick={() => setToggler(!toggler)} className="big">
                  <img src="https://i.ibb.co/QN6Bnrb/gal4958.jpg" alt="" />
               </a>
            </div>
         </section>
         <FsLightbox
            toggler={toggler}
            sources={[
               "https://i.ibb.co/QN6Bnrb/gal4958.jpg",
               "https://i.ibb.co/QN6Bnrb/gal4958.jpg",
               "https://i.ibb.co/QN6Bnrb/gal4958.jpg",
               "https://i.ibb.co/QN6Bnrb/gal4958.jpg",
            ]}
         />
      </div>
   );
};
export default Yellowdoor;
