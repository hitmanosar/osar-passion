import React from "react";
import Nav from "./nav";
import Top from "./top";
import Main from "./main";

import '../style/side.css';
import Normal from "./normal";
import Footers from "./footer";



function Home() {
  return (
    <React.Fragment>


      <div>

       

      <style type="text/css">
        {`
    hr {
       
      color: black;
      background-color: black;
      border: 0;
      opacity: 1;
    }

      .border-black {
        --bs-border-opacity: 1;
        border-color: rgba(var(--bs-black-rgb), var(--bs-border-opacity)) !important;
      }
    
    `}
      </style>
        <Nav />
        
        <Top/>

        <Main/>

        <Normal/>

         <Footers/>
      
    

   
    

 
        
      </div>
      
    </React.Fragment>
  );
}

export default Home;
