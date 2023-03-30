import React from 'react'
import {
    Card, Input,Checkbox, Button,Typography,} from "@material-tailwind/react";
  import App from '../App';
  import {  FaFacebook, FaGoogle,  FaApple} from "react-icons/fa";

 const SignIn = () => {
  
  return (
    <Card color="transparent" shadow={false} className="content mt-10">
    
      <Typography color="gray" className="font-bold ">
       Welcome Back!
      </Typography>
      <Typography >Login in your Account</Typography>
      <form className=" w-70 max-w-screen-lg sm:w-96 ">
        <div className="flex flex-col gap-4">
          
          <Input label="Email" />
          <Input type="password" label="Password" />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center"
            >
              Remember me
             
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
      
        <Button className=" btn mt-4 p-4 w-80 " >
          Login
        </Button>
        <Typography className="font-bold m-2">
          or Login with
        </Typography>
        
      </form>
      <div className='flex justify-content-between items-center space-x-5 p-2'>
     
    <FaFacebook style={{color:"blue",fontSize:"25px"}}/>
    <FaGoogle style={{color:"red",fontSize:"25px"}}/>
    <FaApple style={{color:"gray",fontsize:"40px"}}/>
    <Typography>
      Do no have an account? <a href='/signup'>SignUp</a>
    </Typography>
    </div>
    
    </Card>

    

    
  )
}
export default SignIn;
