import React from 'react';
import './custom-button.scss'



const CustomButton =({children, filteredbtn, inverted, ...otherProps})=>{
    return(
       <button className={`${inverted? 'inverted': ""} ${filteredbtn? 'filteredbtn': ""} custom-button`}{...otherProps}>
           {children}
       </button>
    )
}
export default CustomButton