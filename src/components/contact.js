import React from 'react';

import DirectionIcon from '../assests/icons/directionIcon.png'
 import CallsIcon from '../assests/icons/technology.png'
import './contact.css'
import ContactForm from './contactForm';

const Contact =()=> {
    return(
        <div className="contact pad" id="contact">
            <div className="contact-address">
            <h3>Locate Us</h3>
            <h1><span>Order </span>Now</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos eaque aperiam natus ut quasi accusantium soluta possimus! Veritatis pariatur quaerat reprehenderit perspiciatis corrupti eaque ad iure! Eveniet, doloribus nostrum!</p>
            <div className="locationIcons">
                <img src={DirectionIcon} alt="directionIcon"/>
                <p>104, Shagisha, Amukoko. Lagos, Nigeria</p>
            </div>
            <div className="locationIcons">
                <img src={CallsIcon} alt=""/>
                <p>0373863773</p>
                <p>0373863773</p>
            </div>
            <div className="locationIcons">
                <img src={DirectionIcon} alt="directionIcon"/>
                <p>www.dontcheck.com</p>
            </div>
            </div>
            <div className="contactform">
                <ContactForm/>

            </div>

        </div>
    )
}
export default Contact