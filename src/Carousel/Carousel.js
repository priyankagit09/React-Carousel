import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {data} from '../data';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import {MdOutlineArrowBackIos } from "react-icons/md";

import './Carousel.css'

const PreviousBtn=(props) => {
  const {className,onClick}=props;
  return (
    <div className={className} onClick={onClick}>
   <MdOutlineArrowBackIos  style={{color: "black", fontSize: "44px"}}/>
     
     </div>
  )
}
const NextBtn=(props) => {
  const {className,onClick}=props;
  return (
    <div className={className} onClick={onClick}>
    <MdOutlineArrowForwardIos style={{color: "black", fontSize: "44px"}}/>
    </div>
  )
}


const Carousel = () => {
  return (
    <div className="bg-cont">
        <Slider 
        autoplay 
        autoplaySpeed={2000} 
        dots 
        prevArrow={<PreviousBtn/>}
        nextArrow={<NextBtn/>}         
        customPaging= {
          (i) => {
            return (
              <div>
              <img src={data[i]} alt="" style={{width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px"}}/>
              </div>
            )
          }
        }
        dotsClass="slick-dots custom-indicator"
        
        >
    {data.map((each,index) => (
       <div key={index}>
       <img src={each} alt="first" style={{width: "100%", height: "50vh"}}/>
     
         </div>

    )

    )}
    
    
    
          
              </Slider>
              </div>

  )
}

export default Carousel