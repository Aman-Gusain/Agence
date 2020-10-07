import React from "react";
import About from "./Component/LandingPage/About/About";
import "./App.css";
import Contact from "./Component/Contact/Contact";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Navbar />
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
