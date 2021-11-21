import React from 'react'
import Home from './sliderImage/home.svg'
import Plane from './sliderImage/plane.svg'
import Phone from './sliderImage/phone.svg'
import Mail from './sliderImage/email.svg'
import Facebook from './sliderImage/facebook.svg'
import Twitter from './sliderImage/twitter.svg'

export default function Contact() {
    return (
       <div className="contact-area">
           <div className="container">
               <div className="row">
                   <div className="coi-md-4">
           <div className="heading">
               <h1>CONTACT US</h1>
               <hr></hr>
           </div>
           <div className="contact" >
               <h2>CONTACT<br/><br/></h2>
           </div>
           <div className="details">
               
               <img src={Home} alt=""></img>
             <h3>  Address<br/>
                NO:50 new road Colombo, Sri Lanka <br/><br/></h3>
                
           </div>
           <div className="details">
               
              <img src={Phone} alt=""></img>
               <h3>Phone<br/>
                +94 719932953 +94 711950150 <br/><br/></h3>
               
           </div>
           <div className="details">
             
               <img src={Mail} alt=""></img>
               <h3>Email<br/>
                   dilkithakshmila96@gmail.com <br/><br/><br/><br/></h3>
                   </div>
                   <div className="col-mid-7">
                   <div className="box3"></div>
                   <div className="box4"></div>
                   <div className="box5"></div>

                   </div>
           </div>
           </div>
           </div>
          
           <div className="media">  
               <h3>Follow us in Social network<br/><br/> </h3>
               <ul>
               <img src={Facebook} alt="" className="facebook"/>
               <img src={Twitter} alt="" className="twitter"/>
               <img src={Plane} alt="" className="twitter"/>
               <br/><br/>
               </ul>
           </div>
           <div className="since">
               <h2>FANCY COLLECTION</h2><br/>
               <h3>JEWELLERS AND WATCHES SINCE @ 1996</h3><br/>
           </div>

       </div>
    
		
      
       
    )
}
