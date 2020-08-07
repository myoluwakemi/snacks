import React from 'react';
import Logo from '../assests/logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Burger from './Burger'
import styled from 'styled-components';
import './NavBar.css'

    const Nav = styled.nav`
        
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
    `;
    


const  NavBar=() =>{
    return(
        <Nav>
        <div className="logoDiv ">
            <img src={Logo} alt="logo"/>
        </div>

        <Burger/>

        <div className="cart_item">
            <a href="#gallery"><FontAwesomeIcon icon={faShoppingCart}/>  5items-$20</a>

        </div>
        </Nav>


    )
}
export default NavBar