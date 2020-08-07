import React from 'react';


const Greeting = () => {
    const date = new Date()
    const hour = date.getHours()


    let timeOfDay;
    if(hour < 12){
        timeOfDay = <h1>Goodmorning You!!</h1>
    }else if(hour <= 12 && hour < 17)
    timeOfDay = <h1>How are you doing this Afternoon</h1>
    else{
        timeOfDay = <h1>GoodNight Lovely!</h1>
    }

    return(
        <div className="pad">
            {timeOfDay}

        </div>

    )
}
export default Greeting