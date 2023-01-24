import React from "react";
import l2 from "../photo/l2.png";
import { render } from 'react-dom';
import Typed from 'react-typed';
import Client from "./client";

// hr {

//   color: black;
//   background-color: black;
//   border: 0;
//   opacity: 1;
// }




function Top() {

 

  return (
    <React.Fragment>
      <style type="text/css">
        {`
    

      .border-black {
        --bs-border-opacity: 1;
        border-color: rgba(var(--bs-black-rgb), var(--bs-border-opacity)) !important;
      }
    
    `}
      </style>

      <div className="container  logos">
        <div className="row d-flex flex-column-reverse  flex-lg-row flex-md-column-reverse flex-lg-row">
          <div className="col mt-4 text-sm-center text-center text-lg-start">
            <h3 className="h33">Let Me Design Your Bussiness To Achieve.</h3>
            <img
              src={l2}
              className="img-fluid img w-70 h-50 mt-2"
              alt=""
            />{" "}
            <br /> <br />
            <button class="custom-btn btns text-uppercase mx-3 my-2 text-center mx-auto">
              <span>services</span>
            </button>
            <button class="custom-btn btns text-uppercase mx-3 my-2">
              <span>our clients</span>
            </button>
          </div>

          <div className="col mt-4">
            <h1 className="text-white bg-dark   text-uppercase py-2 px-3">
            <Typed
                    strings={["why choose us?","why choose passion?"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                  />
              
            </h1>
            <br />
            {/* border-start border-black border-3  border-top-0 */}
            <p className="ap  p-3  ">
         
              <span className="fw-bolder fs-4 test">
                Your success is our success.
              </span>{" "}
            
              We enjoy taking the time to get to know you and your business,
              understanding your goals, and helping you reach them. Throughout
              this process, we understand that open communication and responsive
              service is essential in forming those long-term client
              relationships that we value so much.
            </p>
          </div>
        </div>
        <hr className="new5" style={{ color: "black" }} />
      </div>

         <Client/>
    </React.Fragment>
  );
}

export default Top;
