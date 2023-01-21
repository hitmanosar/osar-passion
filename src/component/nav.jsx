import React from "react";
import l1 from '../photo/l1.png';

function Nav() {


  

  
  return (
    <React.Fragment>

      


       <div className="w-80 p-2 nav" >
         
         <div className="row  d-flex flex-column flex-lg-row flex-md-column text-center">
            <div className="col mt-2">
                <img src={l1} width={25+'%'} alt="" />
            </div>

            <div className="col mt-2">
            <ul >
            <li >
              <a aria-current="page" href="#">Home</a>
            </li>
            <li >
              <a href="#">About</a>
            </li>
            <li >
              <a  href="#">Services</a>
            </li>


            <li >
              <a  href="#">Content</a>
            </li>
          </ul>
            </div>
         </div>

        </div>   
     
    </React.Fragment>
  );
}

export default Nav;
