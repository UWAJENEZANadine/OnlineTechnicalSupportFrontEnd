import { Button } from '@material-tailwind/react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/Header.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

 const Header = () => {
  return (
    <div className=' Header-content flex justify-content-between items-center space-x-10 grid grid-cols-3 bg-[#1c5077] '>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UF5a0VcXxmpqW3E1JLOqNr1VQn7wDKedvw&usqp=CAU'
         style={{maxHeight:"50px"}}/>
         </div>
         <div className=' link-items space-x-5'>
        <NavLink to="">HOME</NavLink>
        <NavLink to="">ABOUT US</NavLink>
        <NavLink to="">SERVICES</NavLink>
        </div>
        <div className='btn'>

        <Link to='SignIn'>Sign In</Link>
        </div>
       
         

    </div>
  )
}
export default Header;
