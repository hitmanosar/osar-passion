import React from "react";

function Main() {
  return (
    <React.Fragment>
      <div className="container-fluid text-center ma mt-5 py-2">
       <div className="row d-flex flex-row justify-content-evenly">
        <div className="col-12 col-lg-5 mt-5 mains  rounded  p-4 bg-white">
        <p className="text-sm-start">
          Logo design,media design,post design,cover design,poster
          design,company profile design,catalouge design,menu design,bussiness
          card design,gift voucher design,stamp card graphic design, cartificate
          card design,brochue design,pamplet design,flyer design,sticker
          design,packing design,voucher design,mail template design,etc....
        </p>
        <button class="custom-btn btns text-uppercase"><span>learn more</span></button>
        </div>
   
        <div className="col-12 col-lg-5 mains mt-5 rounded  p-4 bg-white">
        <p>
          Logo design,media design,post design,cover design,poster
          design,company profile design,catalouge design,menu design,bussiness
          card design,
        </p>
         <button class="custom-btn btns text-uppercase"><span>learn more</span></button>
        </div>

       
       </div>

       <div className="row d-flex flex-row justify-content-center mt-5">
       <div className="col-12 col-lg-5 col-md-12 rounded mains p-4 bg-white">
        <p>
          web creation coming soon <i class="fa-brands fa-facebook"></i>
        </p>
        <button class="custom-btn btns text-uppercase"><span>learn more</span></button>
        </div>
        
       </div>

       <br /> <p></p>
      </div>
    </React.Fragment>
  );
}

export default Main;
