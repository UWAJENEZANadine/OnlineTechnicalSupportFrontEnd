import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import "../css/Footer.css";
const Footer = () => {
  return (
    <section className="footer bg-[#1c5077]">
      <div className="text-gray-300 pt-10 pr-16 pl-16 text-center grid grid-cols-3 gap-4">
        <div className="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UF5a0VcXxmpqW3E1JLOqNr1VQn7wDKedvw&usqp=CAU"
            style={{ maxHeight: "60px" }}
            className="opacity-80 pl-36 mb-7"
          />
          <p className="tracking-wider">
            Our online technical support is here to help you all for any
            challeges you met with Virus removal, software installation &
            configuration, computer performance,peripheral support
          </p>
        </div>
        <div>
          <h1 className="text-md mb-1 uppercase">Navigation</h1>
          <h2 className="heading-line1 mb-5"></h2>
          <ul>
            <li>
              <Link to="HomePage" className="leading-loose">
                Home
              </Link>
            </li>
            <li>
              <Link to="About" className="leading-loose">
                About us
              </Link>
            </li>

            <li>
              <Link to="Services" className="leading-loose">
                Services
              </Link>
            </li>
            <li>
              <Link to="SignIn" className="leading-loose tracking-wider">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-md mb-1 uppercase">Our Social Media</h1>
          <h2 className="heading-line2  mb-5"></h2>
          <Link className="">
            <TwitterIcon />
          </Link>
          <Link className="ml-3">
            <FacebookIcon />
          </Link>
          <Link className="ml-3">
            <InstagramIcon />
          </Link>
          <Link className="ml-3">
            <LinkedInIcon />
          </Link>
        </div>
      </div>

      <section>
        <div className="px-28 py-7">
          <div className="bg-gray-500 horizontal-rule"> </div>
        </div>
        <div className="grid grid-cols-2 px-96 text-center text-gray-200 social-media-container">
          <div>
            <h1 className="">
              <EmailOutlinedIcon /> Email Support
            </h1>
          </div>
          <div>
            <h1>
             
              <ForumOutlinedIcon /> Chat Support
            </h1>
          </div>
        </div>
        <p className="text-white px-96 py-10">
          &copy; copyright 2023
          <span className="uppercase">online technical support</span> | All
          rights reserved
        </p>
      </section>
    </section>
  );
};
export default Footer;
