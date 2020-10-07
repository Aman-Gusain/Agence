import React, { useEffect } from "react";
import Styles from "./Clientel.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Clientel = () => {
   useEffect(() => {
      const items = document.querySelectorAll(".slider-item");
      const itemCount = items.length;
      // const nextItem = document.querySelector(".next");
      // const previousItem = document.querySelector(".previous");
      const navItem = document.querySelector("a.toggle-nav");
      let count = 0;

      function showNextItem() {
         items[count].classList.remove("activ");

         if (count < itemCount - 1) {
            count++;
         } else {
            count = 0;
         }

         items[count].classList.add("activ");
      }

      function showPreviousItem() {
         items[count].classList.remove("activ");

         if (count > 0) {
            count--;
         } else {
            count = itemCount - 1;
         }

         items[count].classList.add("activ");
         // Check if working...
         console.log(count);
      }

      function toggleNavigation() {
         this.nextElementSibling.classList.toggle("activ");
      }

      function keyPress(e) {
         e = e || window.event;

         if (e.keyCode == "37") {
            showPreviousItem();
         } else if (e.keyCode == "39") {
            showNextItem();
         }
      }
      setInterval(showNextItem, 3000);
      // nextItem.addEventListener("click", showNextItem);
      // previousItem.addEventListener("click", showPreviousItem);
      document.addEventListener("keydown", keyPress);
   });
   return (
      <div className="clientel">
         <h1 className="head">FEATURED WORK</h1>
         <div
            className="intro-section"
            data-aos="zoom-in"
            data-aos-duration="1000"
         >
            <div className="container5">
               <div className="grid">
                  <div className="column-xs-12">
                     <ul className="slider">
                        <li className="slider-item activ">
                           <div className="grid vertical">
                              <div className="column-xs-12 column-md-2 hide-mobile">
                                 <div className="intro">
                                    <a href="/work">
                                       <h1 className="title">
                                          <span className="underline">
                                             Goswole
                                          </span>
                                       </h1>
                                    </a>
                                 </div>
                              </div>
                              <div className="column-xs-12 column-md-10">
                                 <div className="image-holder">
                                    <img src="https://source.unsplash.com/cddaZDt6uRw" />
                                 </div>
                                 <div className="grid">
                                    <div className="column-xs-12 column-md-9">
                                       <div className="intro show-mobile">
                                          <a href="/work">
                                             <h1 className="title">
                                                <span className="underline">
                                                   Explore Tokyo
                                                </span>
                                             </h1>
                                          </a>
                                       </div>
                                       <p className="description">
                                          Tokyo, Japan’s busy capital, mixes the
                                          ultramodern and the traditional, from
                                          neon-lit skyscrapers to historic
                                          temples.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="slider-item">
                           <div className="grid vertical">
                              <div className="column-xs-12 column-md-2 hide-mobile">
                                 <div className="intro">
                                    <a href="/work">
                                       <h1 className="title">
                                          <span className="underline">
                                             Scentra
                                          </span>
                                       </h1>
                                    </a>
                                 </div>
                              </div>
                              <div className="column-xs-12 column-md-10">
                                 <div className="image-holder">
                                    <img src="https://source.unsplash.com/Pz3EHf-KJfc" />
                                 </div>
                                 <div className="grid">
                                    <div className="column-xs-12 column-md-9">
                                       <div className="intro show-mobile">
                                          <a href="/work">
                                             <h1 className="title">
                                                <span className="underline">
                                                   Scentra
                                                </span>
                                             </h1>
                                          </a>
                                       </div>
                                       <p className="description">
                                          Kyoto is famous for its numerous
                                          classNameical Buddhist temples,
                                          gardens, imperial palaces, Shinto
                                          shrines and traditional.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="slider-item">
                           <div className="grid vertical">
                              <div className="column-xs-12 column-md-2 hide-mobile">
                                 <div className="intro">
                                    <a href="/work">
                                       <h1 className="title">
                                          <span className="underline">
                                             Yellow Door
                                          </span>
                                       </h1>
                                    </a>
                                 </div>
                              </div>
                              <div className="column-xs-12 column-md-10">
                                 <div className="image-holder">
                                    <img src="https://source.unsplash.com/peYW3VwICpE" />
                                 </div>
                                 <div className="grid">
                                    <div className="column-xs-12 column-md-9">
                                       <div className="intro show-mobile">
                                          <a href="/work">
                                             <h1 className="title">
                                                <span className="underline">
                                                   Yellow Door
                                                </span>
                                             </h1>
                                          </a>
                                       </div>
                                       <p className="description">
                                          Osaka is a large port city and
                                          commercial center known for its modern
                                          architecture, nightlife and hearty
                                          street food.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="slider-item">
                           <div className="grid vertical">
                              <div className="column-xs-12 column-md-2 hide-mobile">
                                 <div className="intro">
                                    <a href="/work">
                                       <h1 className="title">
                                          <span className="underline">
                                             Perch
                                          </span>
                                       </h1>
                                    </a>
                                 </div>
                              </div>
                              <div className="column-xs-12 column-md-10">
                                 <div className="image-holder">
                                    <img src="https://source.unsplash.com/peYW3VwICpE" />
                                 </div>
                                 <div className="grid">
                                    <div className="column-xs-12 column-md-9">
                                       <div className="intro show-mobile">
                                          <a href="/work">
                                             <h1 className="title">
                                                <span className="underline">
                                                   Perch
                                                </span>
                                             </h1>
                                          </a>
                                       </div>
                                       <p className="description">
                                          Osaka is a large port city and
                                          commercial center known for its modern
                                          architecture, nightlife and hearty
                                          street food.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                     </ul>
                     <div className="grid">
                        <div className="column-xs-12"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Clientel;
