import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const UL = styled.ul`
list-style: none;
display:flex;
justify-content: space-around;

li{
    padding: 10px;
}
li a{
    font-size: 1.1rem;

}
li a:hover{
    color:black;

}
@media(max-width:760px){
    
    flex-flow:column nowrap;
    background-color:  #f4f4f4;;
    position:fixed;
    
    transform: ${({open}) => open ? "translateX(0)": "translate(100%)"};
    top:40px;
    right: 0;
    width: 200px;
    height: 200px;
    z-index: 20;
    
}
li a{
    color: palevioletred;
    text-decoration:none
}
`;



function MobileWebNav( {open}){
    return(
        <UL open={open}>
        <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <Link to='/gallery'>Gallery</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      </UL>
    )
}
export default MobileWebNav