import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "../css/SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container bg-gray-300 h-full">
      <Card color="transparent" shadow={false} className="bg-white w-1/2 p-20">
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

          <Button className="signup-button mt-6" fullWidth>
            Register
          </Button>
         <Typography>Already have an Account<Link to='SignIn'>Sign In</Link></Typography> 
        </form>
      
    
      </Card>
    </div>
  );
};

export default SignUp;
