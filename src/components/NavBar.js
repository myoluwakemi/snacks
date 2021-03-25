import React from 'react';
import {connect} from 'react-redux'
import Logo from '../assests/logo.svg'

import './NavBar.css'
import CartIcon from './cart/cart-icon/cart-icon';
import { Link } from 'react-router-dom';
import CartDropDown from './cart/cart-dropDown/cart-dropDown';

    /*const Nav = styled.nav`
        
        border-bottom: 2px solid #f1f1f1;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;


        @media(min-width: 760px){
            
              padding-left: 5rem ;
              padding-right: 5rem;
            
          }
          @media(min-width: 1125px){
            
              padding-left: 10rem ;
              padding-right: 10rem;
            
          }
    `;*/
    


const  NavBar=({hidden}) =>{
    return(
        <div>
            <div  className="nav ">
        <div className="logoDiv ">
            <img src={Logo} alt="logo"/>
        </div>
        <div className="menu-Nav">
            <Link className="menulist" to='/'>
                HOME
            </Link>
            <Link  className="menulist" to='/gallery'>
                GALLERY
            </Link>
            <Link className="menulist" to='/register'>
                REGISTER
            </Link>
        </div>

       
        <CartIcon/>
        </div>
        {hidden? null :<CartDropDown/>}
        
        </div>


    )
}


const mapStateToProps= ({cart: {hidden}})=>({
    hidden

})

export default connect(mapStateToProps)(NavBar)