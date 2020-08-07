import React, { useState } from 'react';
import styled from 'styled-components';
import MobileWebNav from './MobileWebNav';

const StyledBurger = styled.div`
    width: 2rem;
    height:2rem;
    position: fixed;
    top: 60px;
    right: 20px;
    display:flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index:30;


    @media(min-width: 760px){
        display:none;
    }
    div{
        width:2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open? "black" : "palevioletred")};
        border-radius:10px;
        transform-origin: 1px;
        transition: all .3s linear;

    &:nth-child(1){
        transform: ${({ open }) => (open? "rotate(45deg)": "rotate(0)")}
    }
    &:nth-child(1){
        -webkit-transform: ${({ open }) => (open? "rotate(45deg)": "rotate(0)")}
    }

    &:nth-child(2){
        display: ${({open}) => (open? "none": "flex")}
     }
     &:nth-child(3){
         transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"}
     }
  
     &:nth-child(3){
        -webkit-transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"}
    }
 
`;


const Burger=()=>{
    const[open, setOpen] =useState(false)
    return(
        <>
        <StyledBurger open={open} onClick={() =>setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
        <MobileWebNav open={open}/>
        </>

    )

}
export default Burger