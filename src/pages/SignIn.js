import React from 'react'
import {
  Card, Input, Checkbox, Button, Typography,
} from "@material-tailwind/react";
import App from '../App';
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";



const SignIn = () => {

  return (
    <div className='content-SignIn grid grid-cols-2 m-4  '>
      <div className='pic-SigIn'>
        <img src='https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          style={{ width: "45vw", height: "60vh" }} />
      </div>
      <div className='form-card'>
        <Card color="transparent" shadow={false}>

          <Typography className="font-bold text-2xl text-black p-4">
            ONLINE TECHNICAL SUPPORT
          </Typography>

          <form className=" w-70 max-w-screen-lg sm:w-96 ">
            <div className="flex flex-col gap-2 ">
              <label className='font-bold'>Email</label>
              <Input type="Email" style={{ borderRadius: "20px" }} />
              <label className='font-bold'>Password</label>
              <Input type="password" style={{ borderRadius: "20px" }} />
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
                <GoogleIcon className='signup with text-red-400 border-solid border-2 border-[#ad01b0;] rounded-' />
              </a>
              <a href='#'>
                <FacebookIcon className='signup with text-blue-800 border-solid border-2 border-[#ad01b0;] ml-5' />
              </a>
              <a href='#'>
                <AppleIcon className='signup with text-black border-solid border-2  border-[#ad01b0;] ml-5' />
              </a>

            </div>
            <Typography className="pt-3">
              Do not have an Account{" "}
              <Link to="SignUp" className="text-blue-300">
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
