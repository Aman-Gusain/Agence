import React, { useEffect } from "react";
import { Route } from "react-router";
import Styles from "./Work.css";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Yellowdoor from "./Yellowdoor/Yellowdoor";

const Work = () => {
   useEffect(() => {
      $(".tab-slider").slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         infinite: false,
         responsive: [
            {
               breakpoint: 991,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
               },
            },
            {
               breakpoint: 600,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
               },
            },
            {
               breakpoint: 400,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               },
            },
         ],
      });

      $(".abc").click(function () {
         $(".abc").removeClass("active");
         $(this).addClass("active");
         var val = $(this).attr("id");
         $(".tab-pane").removeClass("show");
         $(".tab-pane").removeClass("active");
         $("#1" + val).addClass("show");
         $("#1" + val).addClass("active");
      });
   });
   return (
      <div className="workpage">
         <section className="services-area">
            <div className="service-link">
               <div className="container01">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="services-tab-links">
                           <ul className="nav nav-pills tab-slider">
                              <li>
                                 <div
                                    className="abc effect-underline"
                                    id="tab1"
                                    // className="activee"
                                    data-toggle="pill"
                                 >
                                    All Design
                                 </div>
                              </li>
                              <li>
                                 <div
                                    className="abc"
                                    id="tab2"
                                    data-toggle="pill"
                                 >
                                    Web Design
                                 </div>
                              </li>
                              <li>
                                 <div
                                    className="abc"
                                    id="tab3"
                                    data-toggle="pill"
                                 >
                                    Mobile App
                                 </div>
                              </li>
                              <li>
                                 <div
                                    className="abc"
                                    id="tab4"
                                    data-toggle="pill"
                                 >
                                    search engine
                                 </div>
                              </li>
                              <li>
                                 <div
                                    className="abc"
                                    id="tab5"
                                    data-toggle="pill"
                                 >
                                    Mobile App
                                 </div>
                              </li>
                              <li>
                                 <div
                                    className="abc"
                                    id="tab6"
                                    data-toggle="pill"
                                 >
                                    search engine
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="service-tab">
               <div className="container010">
                  <div className="tab-content">
                     <div className="tab-pane active show" id="1tab1">
                        <div className="container-fluid mt-2">
                           <div className="card-columns">
                              <a
                                 className="card card-reveal"
                                 href="/work/yellowdoor"
                              >
                                 <img
                                    className="card-img-top"
                                    src="https://source.unsplash.com/jTGjg-NDLyM/600x400"
                                 />
                                 <div className="card-body">
                                    <div className="card-title">
                                       Look forward
                                    </div>
                                 </div>
                              </a>

                              <a className="card card-reveal" href="#">
                                 <img
                                    className="card-img-top"
                                    src="https://source.unsplash.com/fqgt7A43-K0/400x500"
                                 />
                                 <div className="card-body">
                                    <div className="card-title">
                                       Umbrella kiss
                                    </div>
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
                                    src="https://source.unsplash.com/DMS_Lz32y2A/400x200"
                                 />
                                 <div className="card-body">
                                    <div className="card-title">
                                       Tower of Terror
                                    </div>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="1tab2">
                        <div className="tab-content">
                           <div className="row">
                              <div className="col-lg-6">
                                 <div className="content">
                                    <small>Features</small>
                                    <h4>
                                       A user-friendly Theme, build with
                                       usability in mind, great modern design
                                       and unique features
                                    </h4>
                                    <p>
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipiscing elit, sed do eiusmod tempor
                                       incididunt ut labore et dolore magna
                                       aliqua. Ut enim ad minim veniam, quis
                                       nostrud exercitation ullamco laboris nisi
                                       ut aliquip ex ea commodo consequat.
                                    </p>
                                    <a href="" className="contact-btn">
                                       Contact Now
                                    </a>
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <img
                                    src="https://raw.githubusercontent.com/srmahour/spunkweb/master/images/tab-img.jpg"
                                    alt=""
                                    className="img-fluid lazy"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="1tab3">
                        <div className="tab-content">
                           <div className="row">
                              <div className="col-lg-6">
                                 <div className="content">
                                    <small>Features</small>
                                    <h4>A user-friendly The</h4>
                                    <p>
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipiscing elit, sed do eiusmod tempor
                                       incididunt ut labore et dolore magna
                                       aliqua. Ut enim ad minim veniam, quis
                                       nostrud exercitation ullamco laboris nisi
                                       ut aliquip ex ea commodo consequat.
                                    </p>
                                    <a href="" className="contact-btn">
                                       Contact Now
                                    </a>
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <img
                                    src="https://raw.githubusercontent.com/srmahour/spunkweb/master/images/tab-img.jpg"
                                    alt=""
                                    className="img-fluid lazy"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="1tab4">
                        <div className="tab-content">
                           <div className="row">
                              <div className="col-lg-6">
                                 <div className="content">
                                    <small>Features</small>
                                    <h4>
                                       A user-friendly Theme, build with
                                       usability in mind, great modern design
                                       and unique features
                                    </h4>
                                    <p>
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipiscing elit, sed do eiusmod tempor
                                       incididunt ut labore et dolore magna
                                       aliqua. Ut enim ad minim veniam, quis
                                       nostrud exercitation ullamco laboris nisi
                                       ut aliquip ex ea commodo consequat.
                                    </p>
                                    <a href="" className="contact-btn">
                                       Contact Now
                                    </a>
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <img
                                    src="https://raw.githubusercontent.com/srmahour/spunkweb/master/images/tab-img.jpg"
                                    alt=""
                                    className="img-fluid lazy"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="1tab5">
                        <div className="tab-content">
                           <div className="row">
                              <div className="col-lg-6">
                                 <div className="content">
                                    <small>Features</small>
                                    <h4>
                                       A user-friendly Theme, build with
                                       usability in mind, great modern design
                                       and unique features
                                    </h4>
                                    <p>
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipiscing elit, sed do eiusmod tempor
                                       incididunt ut labore et dolore magna
                                       aliqua. Ut enim ad minim veniam, quis
                                       nostrud exercitation ullamco laboris nisi
                                       ut aliquip ex ea commodo consequat.
                                    </p>
                                    <a href="" className="contact-btn">
                                       Contact Now
                                    </a>
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <img
                                    src="https://raw.githubusercontent.com/srmahour/spunkweb/master/images/tab-img.jpg"
                                    alt=""
                                    className="img-fluid lazy"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="1tab6">
                        <div className="tab-content">
                           <div className="row">
                              <div className="col-lg-6">
                                 <div className="content">
                                    <small>Features</small>
                                    <h4>
                                       A user-friendly Theme, build with
                                       usability in mind, great modern design
                                       and unique features
                                    </h4>
                                    <p>
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipiscing elit, sed do eiusmod tempor
                                       incididunt ut labore et dolore magna
                                       aliqua. Ut enim ad minim veniam, quis
                                       nostrud exercitation ullamco laboris nisi
                                       ut aliquip ex ea commodo consequat.
                                    </p>
                                    <a href="" className="contact-btn">
                                       Contact Now
                                    </a>
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <img
                                    src="https://raw.githubusercontent.com/srmahour/spunkweb/master/images/tab-img.jpg"
                                    alt=""
                                    className="img-fluid lazy"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};
export default Work;
