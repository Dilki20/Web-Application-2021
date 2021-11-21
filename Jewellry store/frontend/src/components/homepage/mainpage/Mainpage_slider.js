import React from 'react'
import Image1 from './sliderImage/1.png'
import Image2 from './sliderImage/2.png'
import Image3 from './sliderImage/3.png'
import Image4 from './sliderImage/4.png'
import Image5 from './sliderImage/5.png'
import Image6 from './sliderImage/6.jpg'
import {Carousel} from '3d-react-carousal';


let slides = [
    <img  src={Image1} className = "slider-image" alt="1" />,
    <img  src={Image2} className = "slider-image" alt="2" /> ,
    <img  src={Image3} className = "slider-image" alt="3" /> ,
    <img  src={Image4} className = "slider-image" alt="4" /> ,
    <img  src={Image5} className = "slider-image" alt="5" />,
    <img  src={Image6} className = "slider-image" alt="6" />  ];

 function Mainpage_slider() {
    return (
        <div className ="home-slider">
        <Carousel slides={slides} autoplay={false} />
        </div>

    )
}

export default Mainpage_slider

