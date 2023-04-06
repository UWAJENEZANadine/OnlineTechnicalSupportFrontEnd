import React from "react";
import picture from "../Assets/christin-hume-mfB1B1s4sMc-unsplash.jpg";
import "../css/SignUp.css";


const SignUp = () => {
  return (
    <>
      <div
        className="min-h-screen py-20 Signup-container bg-gray-100"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${picture})` }}
            >
              <h1 className="text-white text-3xl mb-3">
                Welcome to online technical Support
              </h1>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Register</h2>
              <form action="#">
                <div>
                  <select
                    id="countries"
                    className="border rounded border-gray-400 py-1 px-2block w-full p-2.5 text-gray-400 dark:placeholder-gray-400 "
                  >
                    <option selected className="text-black">Select country</option>
                    <option value="US" className="text-black">United States</option>
                    <option value="CA" className="text-black">Canada</option>
                    <option value="FR" className="text-black">France</option>
                    <option value="DE" className="text-black">Germany</option>
                  </select>
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full rounded"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="phone"
                    placeholder="Phone number"
                    className="border border-gray-400 py-1 px-2 w-full rounded"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <input
                    type="text"
                    placeholder="First name"
                    className="border border-gray-400 py-1 px-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border border-gray-400 py-1 px-2 rounded"
                  />
                </div>

                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full rounded"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-400 py-1 px-2 w-full rounded"
                  />
                </div>
                <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400" />
                  <span>
                    I accept the{" "}
                    <a href="#" className="text-[#2353CF] font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-[#2353CF] font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div className="mt-5">
                  <button className="w-full bg-[#2353CF] py-3 text-center text-white rounded">
                    Register Now
                  </button>
                </div>
              </form>
              

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
