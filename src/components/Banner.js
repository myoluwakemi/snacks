import React from 'react';
import './Banner.css'
import CustomButton from './custom-button/custom-button';


function Banner (){
    const date = new Date()
    const hour = date.getHours()


    let timeOfDay;
    if(hour < 12){
        timeOfDay = <h3>Goodmorning You!!</h3>
    }else if(hour >= 12 && hour < 17)
    timeOfDay = <h3>How are you doing this Afternoon</h3>
    else{
        timeOfDay = <h3>GoodNight Lovely!</h3>
    }

    return(


        <div className="banner">
        <div className="banner_inner">
        {timeOfDay}
        <h1>Welcome To Our <br /><span>Stomach Delight Gallery</span></h1>
        <CustomButton>Explore</CustomButton>
        </div>


    </div>

    )
}
export default Banner