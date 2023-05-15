import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import App from "../App";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import PageLayout from "./PageLayout";
import { HostUrl } from "./Configurations";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (email.length === 0) {
    //   alert("please enter valid credential");
    // } else if (password.length === 0) {
    //   alert("please enter valid credential");
    // }

    const userdata = {
      username: username,
      password: password
    };
    await axios
      .post(HostUrl+"login/", userdata)
      .then((result) => {
        // setMessage(result.data.msg);
        console.log(result.data);
        localStorage.setItem('access_token', result.data['access']);
        navigate("/dashboard");
      }).catch((error) => {
        console.log(error);
        window.alert("Incorrect username or password");
        setUsername("");
        setPassword("");

      });
  };


  return (
    <PageLayout>
      <div className="content-SignIn grid grid-cols-2 m-4 ">
        <div className="pic-SigIn">
          <img
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            style={{ width: "45vw", height: "60vh" }}
          />
        </div>
        <div className="form-card">
          <Card color="transparent" shadow={false}>
            <Typography className=" heading-content font-bold font-mono text-black">
              ONLINE TECHNICAL SUPPORT
            </Typography>

            <form
              onSubmit={handleSubmit}
              className=" w-70 max-w-screen-lg sm:w-80 "
            >
              <div className="flex flex-col gap-2 ">
                <label className="font-bold">Email</label>
                <Input
                  className="pl-7"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your Username"
                  required
                />
                <label className="font-bold">Password</label>
                <Input
                  className="pl-7"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  required
                />
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

              <Button
                type="submit"
                className="  mt-5 p-2 w-full m-2 items-center bg-blue-700 text-white text-sm"
                // onClick={() => navigate("/dashboard")}
              >
                Log in
              </Button>
              <Typography className="font-bold m-2">or Login with</Typography>

              <div className="flex justify-content-between items-center space-x-5 pt-2 ">
                <a href="#">
                  <GoogleIcon className="signup with text-red-400 rounded-full" />
                </a>
                <a href="#">
                  <FacebookIcon className="signup with text-blue-800 border-solid border-2border-[#2353CF;] ml-5 rounded-full" />
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
    </PageLayout>
  );
};
export default SignIn;
