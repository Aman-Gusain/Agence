import React from "react";
import Styles from "./App.css";

import Cursor from "./Component/Cursor/Corsor";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Scrollbar from "./Component/Scrollbar/Scrollbar";
// import Rocket from "./Component/Rocket/Rocket";
import { BrowserRouter } from "react-router-dom";
class App extends React.Component {
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Cursor />
               <Scrollbar />
               <Navbar />
               {/* <Rocket /> */}
               <Footer />
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
