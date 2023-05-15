import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import imageclient from "../../Assets/client.jpg";
import imagesupporter from "../../Assets/supporter.jpg";
import { HostUrl } from "../../pages/Configurations";
import picturess from "../../Assets/software.png";


const Chats = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(HostUrl + "conversation/")
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

  return (
    <div className="flex">
   <div className="w-1/3 bg-gray-50 p-4">
          <h2> MY CHARTS </h2>
          {data.map((item) => (
            <div className="p-2 ml-2 mt-1 bg-blue-gray-50" key={item.id}>
              <div className="flex justify-start items-center gap-6 p-2">
                <img src={picturess} alt="" style={{ width: "25px" }} />
                <p2
                  className="text-black cursor-pointer"
                //   onClick={(e) => updatesupporters(e, item.id)}
                >
                  {item.title}
                </p2>
              </div>
            </div>
          ))}
        </div>

      <div className="w-7/12">
        <h1
          className="flex items-center justify-center mt-2"
          style={{ fontSize: "22px" }}
        >
          {" "}
          MICROSFT OFFICE DOESN'T SHOW NAVIGATION BAR{" "}
        </h1>

        <div
          id="toast-notification"
          className="w-12/12 md:w-10/12 mx-4 p-4 text-gray-900 bg-white rounded-lg shadow mt-4  "
          role="alert"
        >
          <div className="flex items-center mb-3">
            <span className="mb-1 text-sm font-semibold text-gray-900">
              {" "}
              Message{" "}
            </span>
          </div>
          <div className="flex items-center">
            <div className="relative inline-block shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src={imageclient}
                alt="Garage"
              />
              <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Message icon</span>
              </span>
            </div>
            <div className="ml-3 text-sm font-normal">
              <div className="text-sm text-blue-900 capitalize font-extrabold">
                Client One
              </div>
              <div className="text-sm font-normal">
                Hi! I got trouble of troubleshooting my Computer, It doesn't
                show anything, What can I do?
              </div>
            </div>
          </div>
        </div>

        <div
          id="toast-notification"
          className="w-11/12 md:w-10/12 mx-4 p-4 text-gray-900 bg-blue-100 rounded-lg shadow mt-4"
          role="alert"
        >
          <div className="flex items-center mb-3">
            <span className="mb-1 text-sm font-semibold text-gray-900">
              {" "}
              Message{" "}
            </span>
          </div>

          <div className="flex items-center">
            <div className="relative inline-block shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src={imagesupporter}
                alt="Garage"
              />
              <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Message icon</span>
              </span>
            </div>
            <div className="ml-3 text-sm font-normal">
              <div className="text-sm text-blue-900 capitalize font-extrabold">
                My Message
              </div>
              <div className="text-sm font-normal">
                Try to troubleshooting my Computer, by checking the cable on the
                CPU and anyway else.
              </div>
            </div>
          </div>
        </div>

        <div
          id="toast-notification"
          className="w-12/12 md:w-10/12 mx-4 p-4 text-gray-900 bg-white rounded-lg shadow mt-4  "
          role="alert"
        >
          <div className="flex items-center mb-3">
            <span className="mb-1 text-sm font-semibold text-gray-900">
              {" "}
              Message{" "}
            </span>
          </div>
          <div className="flex items-center">
            <div className="relative inline-block shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src={imageclient}
                alt="Garage"
              />
              <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Message icon</span>
              </span>
            </div>
            <div className="ml-3 text-sm font-normal">
              <div className="text-sm text-blue-900 capitalize font-extrabold">
                Client One
              </div>
              <div className="text-sm font-normal">
                Still doesn't work how can I do that?
              </div>
            </div>
          </div>
        </div>

        {/* form */}

        <form className="p-4 ml-4 mt-6 w-5/6  mb-2 bg-gray-500">
          <label for="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <button
              type="button"
              className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Upload image</span>
            </button>
            <button
              type="button"
              className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Add emoji</span>
            </button>
            <textarea
              id="chat"
              rows="1"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chats;
