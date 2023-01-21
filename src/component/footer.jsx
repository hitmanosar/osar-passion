import React from "react";
import logo4 from '../photo/logo4.png';


function Footers() {
  return (
    <React.Fragment>
      <div className="foots  p-5">

        <div className="row d-flex flex-column flex-lg-row flex-md-column text-md-start justify-content-around align-items-center">
          <div className="col-12 col-lg-3 col-md-6 col-sm-6  mt-4">
            <img src={logo4} className='img img-fluid' alt="" />
          </div>

          <div className="col-12 col-lg-6 col-md-12 mt-4 text-lg-start text-center">
            <h3>CONTACT</h3>
           <div className="text-start ">
           <p>Address &nbsp;: No (84), Yadanar Street, Kamayut Township, Yangon</p>
            <p>Phone  &nbsp;&nbsp;&nbsp;<span className="ms-1"></span>:<span style={{color: '#1a6c7a'}} className='p'> +959 777 120 131 , +959 777 120 141</span></p>
            <p>Email  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{marginLeft: 5+'px'}}></span>: <span style={{color: '#1a6c7a'}} className='p'>info@passiondesignandmedia.com</span> </p>
           </div>
          </div>

        </div>

        <hr className="new5" style={{color: 'black'}} />
         
         <div className="row">
            <div className="col-12 text-center">
                <p>Copyright © 2023 Passion Design and Media</p>
            </div>
         </div>

      </div>
    </React.Fragment>
  );
}

export default Footers;
