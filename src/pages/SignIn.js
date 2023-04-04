import React from 'react'
import {
  Card, Input, Checkbox, Button, Typography,
} from "@material-tailwind/react";
import App from '../App';
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import '../App.css'
const SignIn = () => {

  return (
    <div className='content-SignIn grid grid-cols-2 m-4 '>
      <div className='pic-SigIn'>
        <img src='https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMHNpdHRpbmclMjBvbiUyMGNoYWlyJTIwd3JpdHRpbmclMjBvbiUyMGxhcHRvcCUyMHdpdGglMjByaWdodCUyMHNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
        style={{width:"45vw",height:"60vh"}}/>
      </div>
      <div className='form-card'>
    <Card color="transparent" shadow={false}>
    
      <Typography  className=" heading-content font-normal">
       Online Technical Support
      </Typography>
    
      <form className=" w-70 max-w-screen-lg sm:w-96 ">
        <div className="flex flex-col gap-2 ">
          <label className='font-bold'>Email</label>
          <Input type="Email" style={{borderRadius:"20px"}}/>
          <label className='font-bold'>Password</label>
          <Input type="password" style={{borderRadius:"20px"}}/>
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
      
        <Button className=" btn mt-20 p-2 " >
          Log in
        </Button>
        <Typography className="font-bold m-2">
          or Login with
        </Typography>
        <div className='flex justify-content-between items-center space-x-5 pt-2'>
          <a href='#'>
            <GoogleIcon className='signup with text-red-400 border-solid border-2 border-[#2353CF;] rounded-full'/>
          </a>
          <a href='#'>
            <FacebookIcon className='signup with text-blue-800 border-solid border-2border-[#2353CF;] ml-5 rounded-full'/>
          </a>
          <a href='#'>
            <AppleIcon className='signup with text-black border-solid border-2  border-[#2353CF;] ml-5 rounded-full'/>
          </a>
     
     </div>
     <Typography className="pt-3">
              Do not have an Account{" "}
              <Link to="/SignUp" className="text-blue-300">
                Sign Up
              </Link>
            </Typography>
        
      </form>
     
    
    </Card>
    </div>
    </div>




  )
}
export default SignIn;
