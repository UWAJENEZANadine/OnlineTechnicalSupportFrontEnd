import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import picture from "../Assets/christin-hume-mfB1B1s4sMc-unsplash.jpg";
import "../css/SignUp.css";

const SignUp = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-gray-100 signup-container w-auto">
      <div className="w-full">
        <img
          src={picture}
          alt="picture"
          style={{ widith: "100%", height: "120vh" }}
          className= "rounded-xl rounded-r-none"
        />
      </div>
      <div className="bg-white p-5 pl-12 rounded-xl w-full rounded-l-none">
        <Card color="transparent" shadow={false} className="card-container-data">
          <Typography
            color="gray"
            className="create-account-container font-normal "
          >
            Create an Account
          </Typography>
          <form className="mt-5 mb-1 w-80 max-w-screen-lg">
            <div className="mb-1 flex flex-col gap-5">
              <div className="">
                <Select label="Select your country">
                  <Option>Rwanda</Option>
                  <Option>Nigeria</Option>
                  <Option>Ethiopia</Option>
                  <Option>Angola</Option>
                  <Option>South Africa</Option>
                  <Option>Uganda</Option>
                  <Option>Burundi</Option>
                  <Option>Tanzania</Option>
                  <Option>DRC</Option>
                  <Option>Kenya</Option>
                </Select>
              </div>
              <Input size="lg" label="Email" />
              <Input size="lg" label="Phone number" type="tel" />
              <Input size="lg" label="User name" />
              <Input size="lg" label="First name" />
              <Input size="lg" label="Last name" />
              <Input type="password" size="lg" label="Password" />
              <Input type="password" size="lg" label="Confirm Password" />
            </div>

            <Button className="signup-button mt-4 tracking-widest">
              Register
            </Button>

            <div className="">
              <Typography className="pt-3">or signup with</Typography>
              <a href="#" className="">
                <GoogleIcon className="signup with text-red-400 border-solid border-2 border-[#2353CF;] rounded-full p-1" />
              </a>
              <a href="#">
                <FacebookIcon className="signup with text-blue-800 border-solid border-2 border-[#2353CF;] ml-5 rounded-full p-1" />
              </a>
              <a href="#">
                <AppleIcon className="signup with text-black border-solid border-2  border-[#2353CF;] ml-5 rounded-full p-1" />
              </a>
            </div>
            <Typography className="pt-3">
              Already have an Account? 
              <Link to="SignIn" className="text-blue-300">
                      Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
