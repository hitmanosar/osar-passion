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
      <div className="container cl p-5 mt-5">
        {/*           
               <div className="cards">

                <div className="cards_img mt-5">
                    <img src={client} className='c_img' width={120+'px'} height={120+'px'} alt="" srcset="" />
                </div>


                <div className="cards_text mt-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?</p>
                </div>


                <div className="cards_name mt-5">
                    <h5 className="text-primary">Author</h5>
                </div>
              

               </div> */}

        <div className="row d-flex flex-column flex-lg-row justify-content-center text-center mx-auto align-items-center mt-5">
          <div className="col-12 col-lg-3 col-md-6 col-sm-12 ">
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

          <div className="col-12 col-lg-3 col-md-6 col-sm-12">
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

          <div className="col-12 col-lg-3 col-md-6 col-sm-12">
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
