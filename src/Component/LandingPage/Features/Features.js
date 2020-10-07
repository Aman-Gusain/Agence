import React from "react";
import brand from "./resource/brand.jpg";
import design from "./resource/design.jpg";
import development from "./resource/development.jpg";
import identity from "./resource/identity.jpg";
import production from "./resource/production.jpg";
import research from "./resource/research.jpg";
import Styles from "./Features.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Features = () => {
   return (
      <section id="features">
         <h1>OUR SERVICES</h1>
         <div className="features-inner">
            <div
               data-aos="fade-up-right"
               data-aos-duration="1000"
               className="features-group"
            >
               <div className="features-image">
                  <img src={research} alt="none" />
               </div>
               <div className="features-text">
                  <h1 class="animate__animated animate__bounce">
                     Digital X-Rays
                  </h1>
                  <p>
                     Dr Albazzaz, Dr Javed and Dr Safi bring the most up to date
                     dental technology to their West Chicago practice. They use
                     digital x-rays which require less radiation and provide
                     improved diagnostic quality to every patient appointment.
                     The doctors are happy to share their findings with you by
                     showing you your dental x-rays on a large computer screen.
                  </p>
               </div>
            </div>
            <div
               data-aos="fade-up-left"
               data-aos-duration="1000"
               className="features-group"
            >
               <div className="features-image inverted">
                  <img className="picss" src={production} />
               </div>
               <div className="features-text inverted">
                  <h1>Dental Cleanings</h1>
                  <p>
                     Our dentists treat patients with healthy gums and patients
                     who inflammation and other periodontal diseases. Our staff
                     agree with the American Dental Association guidelines for
                     dental cleanings. We want all patients to visit the dentist
                     for their dental cleanings at least twice a year.
                  </p>
               </div>
            </div>
            <div
               data-aos="fade-up-right"
               data-aos-duration="1000"
               className="features-group"
            >
               <div className="features-image">
                  <img className="picss" src={identity} />
               </div>
               <div className="features-text">
                  <h1>Fluoride Treatments</h1>
                  <p>
                     The staff at North Ave Dental Associates believe that
                     everyone should have routine professional fluoride
                     treatments.
                  </p>
               </div>
            </div>

            <div
               data-aos="fade-up-left"
               data-aos-duration="1000"
               className="features-group"
            >
               <div className="features-image inverted">
                  <img className="picss" src={development} />
               </div>
               <div className="features-text inverted">
                  <h1>Oral Hygiene Instruction</h1>
                  <p>
                     Home care is an important part of maintaining healthy teeth
                     and gums. Our staff are happy to review proper brushing &
                     flossing techniques as well as other dental home care
                     solutions that will prevent dental disease.
                  </p>
               </div>
            </div>
            <div
               data-aos="fade-up-right"
               data-aos-duration="1000"
               className="features-group"
            >
               <div className="features-image">
                  <img className="picss" src={brand} />
               </div>
               <div className="features-text">
                  <h1>Digital X-Rays</h1>
                  <p>
                     Dr Albazzaz, Dr Javed and Dr Safi bring the most up to date
                     dental technology to their West Chicago practice. They use
                     digital x-rays which require less radiation and provide
                     improved diagnostic quality to every patient appointment.
                     The doctors are happy to share their findings with you by
                     showing you your dental x-rays on a large computer screen.
                  </p>
               </div>
            </div>
            <div
               data-aos="fade-up-left"
               data-aos-duration="1000"
               className="features-group"
            >
               <div className="features-image inverted">
                  <img className="picss" src={design} />
               </div>
               <div className="features-text inverted">
                  <h1>Digital X-Rays</h1>
                  <p>
                     Dr Albazzaz, Dr Javed and Dr Safi bring the most up to date
                     dental technology to their West Chicago practice. They use
                     digital x-rays which require less radiation and provide
                     improved diagnostic quality to every patient appointment.
                     The doctors are happy to share their findings with you by
                     showing you your dental x-rays on a large computer screen.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Features;
