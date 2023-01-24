import React from "react";

import client from "../photo/client.png";
import "../style/card.css";

function Client() {
  let cards = document.querySelector(".cards");
  let img = document.querySelector(".cards-img");

  // function MouseOver(){
  //   cards.style.transForm = 'scale(1.1,1.1)';
  // }

  // function MouseOut(){
  //     alert('mouse leave');
  // }

  return (
    <React.Fragment>
      
       
           <div className="container cl mt-5 p-5">

        

        <div className="row d-flex align-items-center justify-content-evenly text-center ">

      
          <div className="col-12 col-lg-2 col-md-6 col-sm-12 mt-5">
            <div class="cards">
              <img src={client} className="cards-img" alt="" />
              <div class="cards-info">
                <p class="texts-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat, consequuntur doloribus voluptate esse iure?
                </p>
                <p class="texts-title">Autor</p>
              </div>
            </div>
          </div>
         
          <div className="col-12 col-lg-2 col-md-6 col-sm-12 mt-5">
            <div class="cards">
              <img src={client} className="cards-img" alt="" />
              <div class="cards-info">
                <p class="texts-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat, consequuntur doloribus voluptate esse iure?
                </p>
                <p class="texts-title">Autor</p>
              </div>
            </div>
          </div>


          <div className="col-12 col-lg-2 col-md-6 col-sm-12 mt-5">
            <div class="cards">
              <img src={client} className="cards-img" alt="" />
              <div class="cards-info">
                <p class="texts-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat, consequuntur doloribus voluptate esse iure?
                </p>
                <p class="texts-title">Autor</p>
              </div>
            </div>
          </div>





       </div>
      </div>
    </React.Fragment>
  );
}

export default Client;
