import React from "react";
import "../style/normal.css";
import ls1 from '../photo/ls1.svg';
import ls2 from '../photo/ls2.svg';
import ls3 from '../photo/ls3.svg';

import { useState } from "react";

import Slide from 'react-reveal/Slide';

import Fade from 'react-reveal/Fade';

import { render } from 'react-dom';
import Typed from 'react-typed';


import  ScrollTrigger from 'react-scroll-trigger';




function Normal() {

     const [count,setcount] = useState(false);


    
    //  filter: drop-shadow(0px 0px 20px white);

     if(count){
      let ls1 = document.querySelectorAll('.ls1');
     for(let i=0; i<ls1.length; i++){
      ls1[i].style['transform'] = 'scale(1.1,1.1) rotate(360deg)';
      ls1[i].style['filter'] = 'drop-shadow(0px 0px 0px white)';
      ls1[i].style['opacity'] = '1';
     }
     }


     else{
      let ls1 = document.querySelectorAll('.ls1')
      for(let i=0; i<ls1.length; i++){
        ls1[i].style['transform'] = 'scale(1,1) rotate(0deg)';
        ls1[i].style['filter'] = 'drop-shadow(0px 0px 0px white)';
        ls1[i].style['opacity'] = '0';
       }
     }



    



  return (
    <React.Fragment>
      <div className="cons p-5">
        <div className="row d-flex flex-row justify-content-center align-items-center">
          <div className="col-12 col-lg-8 col-md-12 col-sm-12">
            <p className="mt-5 text-center   text-lg-center ">
              We approach a brand with fresh eyes. We listen with open minds.
              Our process is creative, strategic, and customized for every
              client. We have no signature style because each project directs
              its own path, its own story, and its own look. That’s the fun of
              the creative process. It’s also the way to make a difference in
              the marketplace.
            </p>
          

            <hr className="hrs" style={{color: 'black'}} />
          </div>
        </div>
        <ScrollTrigger onEnter={()=>setcount(true)} onExit={()=>setcount(false)}>
           <div className="row cbox mt-2 d-flex flex-cloumn flex-lg-row flex-md-column flex-sm-column  justify-content-evenly align-items-center">
          
         
          <div className="col-12 col-lg-2 col-md-6 mt-5 c1 text-center p-0">
              
              <div className="c1s p-3">
              <div className="mt-2"></div>
              
             
            <img src={ls1} alt=""  className="ls1"  width={25 + "%"} srcset="" />
          
           
           
            <h4 className="text-white mt-3">One-Stop Solution</h4>
              </div>

            <div className="hr1"></div>
            <p className="p-3 ">
              We handle all aspects of your media appeals including graphic
              designs, digital designs, digital marketing, website development,
              digital printing, offset printing, and any other related media
              needs. We focus on your media appeals so you can focus on your
              business.
            </p>
          </div>
        

        

          
          <div className="col-12 col-lg-2 col-md-6  mt-5 c2 text-center  p-0">
          <div className="c1s p-3">
          <div className="mt-2"></div>
         
         
            <img src={ls2} alt=""  className="ls1"  width={25 + "%"} srcset="" />
            
           
            <h4 className="text-white  mt-3">Unique Service</h4>
            </div>
            <div className="hr1"></div>
            <p className="p-3">
              Providing exceptional customer service is our main strength. We
              take pride in providing outstanding services to our clients. We
              know that our customers are important for us and hence we do not
              leave any stone unturned in helping, guiding, and providing the
              best possible solutions.
            </p>
          </div>
         

         
          <div className="col-12 col-lg-2 col-md-6 mt-5 c3 text-center p-0">
          <div className="c1s p-3">
            <div className="mt-2"></div>
           
            <img src={ls3} alt=""  className="ls1"  width={25 + "%"} srcset="" />
           
            <h4 className="text-white mt-3">Competitive Price</h4>
            </div>
            <div className="hr1"></div>
            <p className="p-3">
              Our prices are competitive and fair. There are no surprise bills.
              Any unexpected or additional expenses must be pre-approved by our
              clients. That’s how we would like to be treated, and that is how
              our clients are treated.
            </p>
          </div>
         
        </div>
      
        </ScrollTrigger>
      </div> 
    </React.Fragment>
  );
}

export default Normal;
