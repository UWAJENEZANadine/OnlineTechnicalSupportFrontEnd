import picturess from "../../Assets/software.png";
import "../../css/category.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { HostUrl } from "../../pages/Configurations";
import imagesupporter from "../../Assets/supporter.jpg";
import "../../css/Form.css";
function Category() {
  const [data, setData] = useState([]);
  const [sdata, setSdata] = useState([]);
  const [supporters, setSupporters] = useState([]);
  const [showForm, setshowForm] = useState("none");
  const [chosenSupporter, setchosenSupporter] = useState(null);
  const [chosenSupporterid, setchosenSupporterid] = useState(null);
  const [title, setTitle] = useState(null);

  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    axios
      .get(HostUrl + "category/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(HostUrl + "get-client-id/",{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        localStorage.setItem("client_id", response.data['id']);
        console.log(" Client id is ", response.data['id'] )
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updatesubcategories = (event, id) => {
    axios.get(HostUrl + "get-subcategory/" + id + "/").then((response) => {
      setSdata(response.data);
      setSupporters([]);
    });
  };

  const updatesupporters = (event, id) => {
    axios.get(HostUrl + "get-supporters/" + id + "/").then((respsonse) => {
      setSupporters(respsonse.data);
      console.log(respsonse.data);
    });
  };

  const fn_showtheform = (event, id, name) => {
    setchosenSupporterid(id);
    setchosenSupporter(name);
    setshowForm("block");
  };

  const fn_hidetheform = (event) => {
    setshowForm("none");
  };

  const handletitle = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const insert_conversation_in_db = (event) => {
    event.preventDefault();
    const client = localStorage.getItem("client_id");


    const json_data = {
      title: title,
      supporter: chosenSupporterid.toString(),
      client: client,
    };
    console.log(accessToken);

    console.log(json_data);

    axios
      .post(HostUrl + "insert-conversation/",{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }, json_data)
  };

  return (
    <div>
      <div className="w-full flex">
        <div className="w-3/12 bg-gray-50 p-4">
          <h2> ALL CATEGORIES </h2>
          {data.map((item) => (
            <div
              className="p-2 ml-2 mt-4 bg-blue-gray-50 rounded"
              key={item.id}
            >
              <div className="flex justify-start items-center gap-6 p-2">
                <img src={picturess} alt="" style={{ width: "25px" }} />
                <p2
                  className="text-black cursor-pointer"
                  onClick={(e) => updatesubcategories(e, item.id)}
                >
                  {" "}
                  {item.name}{" "}
                </p2>
              </div>
            </div>
          ))}
        </div>
        <div className="w-3/12 bg-gray-50 p-4">
          <h2> SUB CATEGORIES </h2>
          {sdata.map((item) => (
            <div
              className="p-2 ml-2 mt-4 rounded bg-blue-gray-50"
              key={item.id}
            >
              <div className="flex justify-start items-center gap-6 p-2">
                <img src={picturess} alt="" style={{ width: "25px" }} />
                <p2
                  className="text-black cursor-pointer"
                  onClick={(e) => updatesupporters(e, item.id)}
                >
                  {" "}
                  {item.name}{" "}
                </p2>
              </div>
            </div>
          ))}
        </div>

        <div className="w-4/12 p-4 bg-blue-200 ">
          <h2> SUPPORTERS WE HAVE IN SELECTED CATEGORY</h2>
          {supporters.map((item) => (
            <div
              className="p-2 ml-2 mt-4 rounded bg-blue-gray-50"
              key={item.id}
            >
              <div className="flex justify-start items-center gap-6 p-2">
                <img src={imagesupporter} alt="" style={{ width: "25px" }} />
                {/* <p2 className="text-black"> {item.category.name} </p2> */}
                {/* <a href=""> */}
                <p2
                  className="text-black cursor-pointer"
                  onClick={(e) => fn_showtheform(e, item.id, item.name)}
                >
                  {" "}
                  {item.name}{" "}
                </p2>

                {/* </a> */}
                {/* <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              View Supporters
            </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Popup form */}
      <div id="popupForm" class="form-popup" style={{ display: showForm }}>
        <form class="form-container" onSubmit={insert_conversation_in_db}>
          <span>Ask: {chosenSupporter} </span> <br />
          <br />
          <input
            type="text"
            placeholder=" Enter the title "
            name="title"
            className="p-1 w-10/12 border-gray-500 bg-gray-200 rounded"
            onChange={(e) => handletitle(e)}
          />
          <br />
          <br />
          <button
            type="submit"
            class="btn bg-blue-200"
            onClick={(e) => insert_conversation_in_db(e)}
          >
            Ask
          </button>
          <button
            type="button"
            class="btn cancel"
            onClick={(e) => fn_hidetheform(e)}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default Category;
