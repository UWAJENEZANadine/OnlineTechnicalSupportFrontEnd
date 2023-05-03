import React, { useState } from "react";
import picture from "../Assets/christin-hume-mfB1B1s4sMc-unsplash.jpg";
import "../css/SignUp.css";
import PageLayout from "./PageLayout";
import axios from "axios";
// import swal from "sweetalert";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleusername = (event) => {
    const username = event.target.value;
    console.log(username);
    setUsername(username);
  };

  const handleemail = (event) => {
    const email = event.target.value;
    console.log(email);
    setEmail(email);
  };

  const handlephone = (event) => {
    const phone_number = event.target.value;
    console.log(phone_number);
    setPhone(phone_number);
  };

  const handlefname = (event) => {
    const first_name = event.target.value;
    console.log(first_name);
    setFname(first_name);
  };

  const handlelname = (event) => {
    const last_name = event.target.value;
    console.log(last_name);
    setLname(last_name);
  };

  const handlepassword = (event) => {
    const password = event.target.value;
    console.log(password);
    setPassword(password);
  };



   /*

{
"username": “<username>",
 "email": “<email>”,
 "phone_number”: “<tel>”,
“first_name”:”<firstname>”,
“last_name”:”<lastname>”,
 "password": “<password>"
}
    */

 
  const submitUser = async (e) => {
    e.preventDefault();
    const userdata = {
      username: username,
      email: email,
      phone_number: phone,
      first_name: fname,
      last_name: lname,
      password: password,
    
    };
  
    await axios
      .post("http://127.0.0.1:8000/register/", userdata)
      .then(result => {
        setMessage(result.data.msg);
        console.log(result.data);
      });
  };

  return (
    <>
      <PageLayout>
       
       
        <div className="min-h-screen py-20 Signup-container bg-gray-100 ">
          
             swal(hello)
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
                <form onSubmit={submitUser}>
                  <div className="mt-5">
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      className="border border-gray-400 py-1 px-2 w-full rounded"
                      onChange={(e) => handleusername(e)}
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="border border-gray-400 py-1 px-2 w-full rounded"
                      onChange={(e) => handleemail(e)}
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="phone"
                      name="phone_number"
                      placeholder="Phone number"
                      className="border border-gray-400 py-1 px-2 w-full rounded"
                      onChange={(e) => handlephone(e)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First name"
                      className="border border-gray-400 py-1 px-2 rounded"
                      onChange={(e) => handlefname(e)}
                    />
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      className="border border-gray-400 py-1 px-2 rounded"
                      onChange={(e) => handlelname(e)}
                    />
                  </div>

                  <div className="mt-5">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border border-gray-400 py-1 px-2 w-full rounded"
                      onChange={(e) => handlepassword(e)}
                    />
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="w-full bg-[#2353CF] py-3 text-center text-white rounded"
                    >
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
      
    </>

    
  );
};

export default SignUp;
