import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import "../css/SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container bg-gray-300 h-screen">
      <Card color="transparent" shadow={false} className="bg-white w-1/2 p-20">
        <Typography
          color="gray"
          className="create-account-container mt-1 font-normal "
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
            <Input type="password" size="lg" label="Password" />
            <Input type="password" size="lg" label="Confirm Password" />
          </div>

          <Button className="signup-button mt-6" fullWidth>
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
