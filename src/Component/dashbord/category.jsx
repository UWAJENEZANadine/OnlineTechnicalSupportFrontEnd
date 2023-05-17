import picturess from "../../Assets/software.png";
import "../../css/category.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { HostUrl } from "../../pages/Configurations";
import imagesupporter from "../../Assets/supporter.jpg";
import "../../css/Form.css"
function Category() {
  const [data, setData] = useState([]);
  const [sdata, setSdata] = useState([]);
  const [supporters, setSupporters] = useState([]);
  const [showForm, setshowForm] = useState('none');


  useEffect(() => {
    axios
      .get(HostUrl + "category/")
      .then((response) => {
        setData(response.data);
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

  const fn_showtheform = (event) =>{
    setshowForm('block');
  };

  const fn_hidetheform = (event) =>{
    setshowForm('none');
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
                <p2 className="text-black cursor-pointer" onClick={(e) => fn_showtheform(e, item.id)}> {item.name} </p2>


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
    <div id="popupForm" class="form-popup" style={{display:showForm}} >
        <form class="form-container">
          <input type="text" placeholder="Enter the chart title " name="title" className="p-1 w-7/12" />

          <button type="submit" class="btn bg-blue-200">
            Submit
          </button>
          <button type="button" class="btn cancel" onClick={(e) => fn_hidetheform(e)}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default Category;
