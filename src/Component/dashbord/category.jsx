import React from 'react'
import picturess from "../../Assets/software.png";
import pic from "../../Assets/window.png"
import picss from "../../Assets/computer.png"
import sec from "../../Assets/security.png"
import "../../css/category.css"




const Category = () =>{
  return(
    <div className='grid grid-cols-2 gap-2  '>
      <div className='p-8' >
         <div className='flex justify-start items-center gap-6 p-2'>
          <img src={picturess} alt=''style={{width:"25px"}}/>
          <p2 className='text-black'>Software support</p2>
          
          </div>
         <div className='flex justify-start items-center gap-6 p-2'>
          <img src={pic} style={{width:"25px"}}/>
          <p3 className='text-black'>Window services</p3>
          
          </div>
         
         <div className='flex justify-start items-center gap-6 p-2'>
          <img src={picss} style={{width:"25px"}}/>
          <p5 className='text-black'> computer sevices</p5>
        
          </div>
          <div className='flex justify-start items-center gap-6 p-2'>
            <img src={sec} style={{width:"25px"}}/>
            <p1 className='text-black'>security support</p1>
          </div>
         
  
      </div>
      <div className='page' >
        <text className='text text-white'>Enjoy the new Experiences of chating with technician in the world
        Connect the people around the world for free</text>
      </div>
    </div>
  )
}

export default Category;