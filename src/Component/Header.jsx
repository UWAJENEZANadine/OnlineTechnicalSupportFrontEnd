import { Button } from '@material-tailwind/react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/Header.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

 const Header = () => {
  return (
    <div className=' Header-content flex justify-content-between items-center space-x-5   '>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UF5a0VcXxmpqW3E1JLOqNr1VQn7wDKedvw&usqp=CAU'
         style={{maxHeight:"60px"}}/>
         
        <NavLink to="">Home</NavLink>
        <NavLink to="">About Us</NavLink>
        <NavLink to="">Services</NavLink>

        <Link to='SignIn'>Sign In</Link>
       
         

    </div>
  )
}
export default Header;
