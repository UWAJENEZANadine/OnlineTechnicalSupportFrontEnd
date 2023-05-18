import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import imageclient from "../../Assets/client.jpg";
import imagesupporter from "../../Assets/supporter.jpg";
import { HostUrl } from "../../pages/Configurations";
import picturess from "../../Assets/software.png";

const Schedule = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState(null);
  const [convId, setConvID] = useState(null);
  const [messages, setMessages] = useState([]);
  const [written_msg, setWritten_msg] = useState([]);

  const accessToken = localStorage.getItem("access_token");
  const clientId = localStorage.getItem("client_id");

  useEffect(() => {
    console.log(" Token still ", clientId);
    axios
      .get(HostUrl + "tutorial/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const get_messages = (event, id, title) => {
    axios.get(HostUrl + "tutorial/" + id + "/").then((response) => {
      setMessages(response.data);
      setTitle(title);
      setConvID(id);
    });
  };

  return (
    <div className="flex">
      <div className="w-4/12 bg-gray-50 p-4">
        <h2 className="uppercase ml-6"> frequently asked questions </h2>
        {data.map((item) => (
          <div className="p-2 ml-2 mt-3 rounded bg-blue-gray-50" key={item.id}>
            <div className="flex justify-start items-center gap-6 p-2">
              <img src={picturess} alt="" style={{ width: "25px" }} />
              <p2
                className="text-black cursor-pointer"
                onClick={(e) => get_messages(e, item.id, item.title)}
              >
                {item.title}
              </p2>
            </div>
          </div>
        ))}
      </div>


      {/* show the article on the card  */}

      <div className="w-7/12">
        <h1
          className="flex ml-8 mt-2 uppercase"
          style={{ fontSize: "22px" }}
        >
          {title ? <> {title} </> : <> No conversation chosen </>}
        </h1>
        <div className="">

            <div
              id="toast-notification"
              className="w-12/12 md:w-10/12 mx-4 p-4 text-gray-900 rounded-lg shadow mt-4 bg-blue-100 "
              role="alert"
            >
              <div className="flex items-center">
                <div className="ml-3 text-sm font-normal">
                  <div className="text-sm text-blue-900 capitalize font-extrabold">
                  </div>
                  <div className="text-sm font-normal p-2 text-justify">{messages.desc}</div>
                </div>
              </div>
            </div>
        </div>


      </div>
    </div>
  );
};

export default Schedule;
