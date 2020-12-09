import React from "react";
import "./App.css";

import Cursor from "./Component/Cursor/Corsor";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
// import Rocket from "./Component/Rocket/Rocket";
import { BrowserRouter } from "react-router-dom";
// import {withRouter} from "react-router"
class App extends React.Component {
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Cursor />
               <Navbar />

               <Footer />
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
