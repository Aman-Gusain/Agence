import React from "react";
import Title from "./Title/Title";
import Featuredtext from "./Featuredtext/Featuredtext";
import Featuredwork from "./FeaturedWork/Featuredwork";
import Recentwork from "./Recentwork/Recentwork";
import Services from "./Services/Services";

const Landingpage = () => {
   return (
      <div>
         <Title />
         <Featuredtext />
         <Featuredwork />
         <Services />
         <Recentwork />
      </div>
   );
};

export default Landingpage;
