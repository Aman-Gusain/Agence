import React, { useEffect } from "react";
import "./Work.css";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

const Work = () => {
   useEffect(() => {
      $(".tab-slider")
         .not(".slick-initialized")
         .slick({
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
      // $(".tab-slider").slick();

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
                        <div className="row">
                           <div className="container-work">
                              <div className="test_box box-01 col-xs-12 col-md-12">
                                 <div className="inner">
                                    <Link
                                       to="/yellowdoor"
                                       className="test_click"
                                    >
                                       <div className="flex_this">
                                          <span className="test_title">
                                             Yellow Door - Branding and
                                             Designing
                                          </span>
                                       </div>
                                    </Link>
                                 </div>
                              </div>
                              <div className="test_box box-02 col-xs-12 col-md-6">
                                 <div className="inner">
                                    <Link
                                       to="/yellowdoor"
                                       className="test_click"
                                    >
                                       <div className="flex_this">
                                          <span className="test_title">
                                             Yellow Door - Branding and
                                             Designing
                                          </span>
                                       </div>
                                    </Link>
                                 </div>
                              </div>
                              <div className="test_box box-03 col-xs-12 col-md-6">
                                 <div className="inner">
                                    <Link
                                       to="/yellowdoor"
                                       className="test_click"
                                    >
                                       <div className="flex_this">
                                          <span className="test_title">
                                             Yellow Door - Branding and
                                             Designing
                                          </span>
                                       </div>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="1tab2">
                        <div className="tab-content">
                           <div className="row">
                              <div className="container-work">
                                 <div className="test_box box-01 col-xs-12 col-md-12">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="test_box box-02 col-xs-12 col-md-6">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="test_box box-03 col-xs-12 col-md-6">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="1tab3">
                        <div className="tab-content">
                           <div className="row">
                              <div className="container-work">
                                 <div className="test_box box-01 col-xs-12 col-md-12">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="test_box box-02 col-xs-12 col-md-6">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="test_box box-03 col-xs-12 col-md-6">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="1tab4">
                        <div className="tab-content">
                           <div className="row">
                              <div className="container-work">
                                 <div className="test_box box-01 col-xs-12 col-md-12">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="test_box box-02 col-xs-12 col-md-6">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="test_box box-03 col-xs-12 col-md-6">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="1tab5">
                        <div className="tab-content">
                           <div className="row">
                              <div className="container-work">
                                 <div className="test_box box-01 col-xs-12 col-md-12">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="test_box box-02 col-xs-12 col-md-6">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="test_box box-03 col-xs-12 col-md-6">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="1tab6">
                        <div className="tab-content">
                           <div className="row">
                              <div className="container-work">
                                 <div className="test_box box-01 col-xs-12 col-md-12">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="test_box box-02 col-xs-12 col-md-6">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="test_box box-03 col-xs-12 col-md-6">
                                    <div className="inner">
                                       <Link
                                          to="/yellowdoor"
                                          className="test_click"
                                       >
                                          <div className="flex_this">
                                             <span className="test_title">
                                                Yellow Door - Branding and
                                                Designing
                                             </span>
                                          </div>
                                       </Link>
                                    </div>
                                 </div>
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
