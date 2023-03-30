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
    <div className="grid grid-cols-2 bg-gray-200 signup-container">
      <div className="">
        <img
          src={picture}
          alt="picture"
          style={{ widith: "100%", height: "100vh" }}
          className= "rounded-md"
        />
      </div>
      <div className="bg-white p-10 rounded-xl">
        <Card color="transparent" shadow={false} className="card-container-data">
          <Typography
            color="gray"
            className="create-account-container font-normal "
          >
            Create an Account
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
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

            <Button className="signup-button mt-6 tracking-widest" fullWidth>
              Register
            </Button>

            <div className="">
              <Typography className="pt-3">or signup with</Typography>
              <a href="#">
                <GoogleIcon className="signup with text-red-400 border-solid border-2 border-[#ad01b0;] rounded-" />
              </a>
              <a href="#">
                <FacebookIcon className="signup with text-blue-800 border-solid border-2 border-[#ad01b0;] ml-5" />
              </a>
              <a href="#">
                <AppleIcon className="signup with text-black border-solid border-2  border-[#ad01b0;] ml-5" />
              </a>
            </div>
            <Typography className="pt-3">
              Already have an Account{" "}
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
