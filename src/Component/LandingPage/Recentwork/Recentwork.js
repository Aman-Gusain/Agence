import React from "react";
import Styles from "./Recentwork.css";

const Recentwork = () => {
   return (
      <div className="Recentwork">
         <div className="container-fluid mt-2">
            <h2 className="section-heading">RECENT WORK</h2>
            <div className="card-columns">
               <a className="card card-reveal" href="/work/yellowdoor">
                  <img
                     className="card-img-top look"
                     src="https://source.unsplash.com/jTGjg-NDLyM/600x400"
                  />
                  <div className="card-body">
                     <div className="card-title">Look forward</div>
                  </div>
               </a>

               <a className="card card-reveal" href="#">
                  <img
                     className="card-img-top"
                     src="https://source.unsplash.com/fqgt7A43-K0/400x500"
                  />
                  <div className="card-body">
                     <div className="card-title">Umbrella kiss</div>
                  </div>
               </a>

               <a className="card card-reveal" href="#">
                  <img
                     className="card-img-top"
                     src="https://source.unsplash.com/WxFRIj4KGTk/400x600"
                  />
                  <div className="card-body">
                     <div className="card-title">The Tulip</div>
                  </div>
               </a>

               <a className="card card-reveal" href="#">
                  <img
                     className="card-img-top"
                     src="https://source.unsplash.com/4nMr12C6Pw8/400x500"
                  />
                  <div className="card-body">
                     <div className="card-title">Read to smile</div>
                  </div>
               </a>
            </div>
         </div>
         <a href="/work">
            <button className="button">Show more</button>
         </a>
      </div>
   );
};

export default Recentwork;
