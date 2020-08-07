import React from 'react';



function FilteredBtn({filterClick}){
    return(
        <div className="categorybtn">
            <button className="btnn" onClick={(all)=>filterClick(all)}>All</button>
        <button className="btnn" onClick={(cake)=>filterClick(cake)}>Cakes</button>
        <button className="btnn" onClick={(cupcakes)=>filterClick(cupcakes)}>Cupcakes</button>
        <button className="btnn" onClick={(sweet)=>filterClick(sweet)}>Sweets</button>
        <button className="btnn" onClick={(doug)=>filterClick(doug)}>Doughnuts</button>
        <button className="btnn" onClick={(drinks)=>filterClick(drinks)}>Drinks</button> 
            
        </div>

    )

}
export default FilteredBtn