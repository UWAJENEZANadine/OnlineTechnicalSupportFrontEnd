import { Button } from '@material-tailwind/react';
import React from 'react'
import "../css/Technician.css"

 const Technician = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
        <div className=''>
            <Button className='w-96 m-4 '>search</Button>
            <div className='m-5 flex justify-content-between items-center gap-6'>
              <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' style={{width:"50px",borderRadius:"100%", height:"50px"}}/>
              jeannette smith
            </div>
            <div className='m-5 flex justify-content-between items-center gap-6'>
              <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' style={{width:"50px",borderRadius:"100%", height:"50px"}}/>
              julia uwera(window service)
            </div>
            <div className='m-5 flex justify-content-between items-center gap-6'>
              <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' style={{width:"50px",borderRadius:"100%", height:"50px"}}/>
             keren(computer service)
            </div>
            <div className='m-5 flex justify-content-between items-center gap-6'>
              <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' style={{width:"50px",borderRadius:"100%", height:"50px"}}/>
              Alice(security support)
            </div>
            <div className='m-5 flex justify-content-between items-center gap-6'>
              <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' style={{width:"50px",borderRadius:"100%", height:"50px"}}/>
              William(software technician)
            </div>

        </div>
        <div className=''>02</div>
        
        

    </div>
  )
}
export default Technician;
