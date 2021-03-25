import React from 'react';
import '../components/filteredbtn.css'

import CustomButton from './custom-button/custom-button';



function FilteredBtn({onClickableItem }){
    return(
        <div className="categorybtn">
          <CustomButton filteredbtn onClick={onClickableItem }>All</CustomButton>
          <CustomButton filteredbtn onClick={onClickableItem }>Cakes</CustomButton>
          <CustomButton filteredbtn onClick={onClickableItem }>Cupcakes</CustomButton>
          <CustomButton filteredbtn onClick={onClickableItem }>Sweets</CustomButton>
          <CustomButton filteredbtn onClick={onClickableItem }>Doughnuts</CustomButton>
          <CustomButton filteredbtn onClick={onClickableItem }>Drinks</CustomButton>
        </div>

    )

}

export default FilteredBtn