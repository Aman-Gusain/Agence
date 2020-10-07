import React from "react";
import Styles from "./About.css";
// import mp4 from "./videos/source.mp4"
// import webm from "./videos/source.webm"
// import ogb form "./videos/source.ogv";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
   return (
      <div>
         <div class="video-hero jquery-background-video-wrapper demo-video-wrapper">
            <video
               class="jquery-background-video"
               autoPlay
               muted
               loop

               // poster="https://d2ezlykacdqcnj.cloudfront.net/_assets/home-video/beach-waves-loop.jpg"
            >
               <source
                  src=".https://i.giphy.com/media/3o6Zt0hHil6MqeJgHu/source.mp4"
                  type="video/mp4"
               ></source>
               <source
                  src="https://i.giphy.com/media/3o6Zt0hHil6MqeJgHu/source.mp4"
                  type="video/webm"
               ></source>
               <source
                  src="https://i.giphy.com/media/3o6Zt0hHil6MqeJgHu/source.mp4"
                  type="video/ogg"
               ></source>
            </video>
            <div class="video-overlay"></div>
            <div class="page-width">
               <div class="video-hero--content">
                  <h2>
                     Knockout your competition with the power of design and code
                  </h2>
               </div>
            </div>
         </div>

         <div id="content">
            <div class="page-width">
               <h3>Easy Background Videos</h3>
               <p>
                  This page uses the{" "}
                  <a
                     href="https://github.com/BGStock/jquery-background-video"
                     target="_blank"
                  >
                     jQuery Background Video
                  </a>{" "}
                  plugin along with some simple html and css to generate this
                  background video.
               </p>
               <p>
                  The video overlay pattern is available at{" "}
                  <a
                     href="http://html5backgroundvideos.com/pattern-overlays/"
                     target="_blank"
                  >
                     http://html5backgroundvideos.com/pattern-overlays/
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
};

export default About;
