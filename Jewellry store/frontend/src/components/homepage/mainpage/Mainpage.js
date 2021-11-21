import React from 'react'
import MainpageSlider from './Mainpage_slider'
import Contact from './Contact'
import Image from './sliderImage/back.jpg'


export default function Mainpage() {
    return (
    
      <div className="background">
        <div className="backgroundimage">
          <img src={Image} alt=""/>
          </div>
          <div className="text-on-image">
            <h1>Get Your Elegant Choices</h1><br/>
            <h3>A best shoping experience with<br/>easy order and large collection</h3>
          </div>
          
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="text-on-box">
            <h3><i># New Arrival</i><br/><br/><i># Jewelry Collection</i><br/><br/><i># Watch Collection</i></h3>
          </div>
        <div>
         <MainpageSlider/>
         </div>
         <div>
           <div>
         <Contact/>
         </div>
         </div>
         </div>

        
    )
}

