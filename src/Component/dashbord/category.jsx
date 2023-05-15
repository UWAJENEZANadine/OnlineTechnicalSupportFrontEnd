import picturess from "../../Assets/software.png";
import "../../css/category.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { HostUrl } from "../../pages/Configurations";

function Category() {
  const [data, setData] = useState([]);
  const [supporters, setSupporters] = useState([]);

  useEffect(() => {
    axios
      .get(HostUrl + "subcategory/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const updatesupporters = (event, id) => {
    // const last_name = event.target.value;
    // const id = 1;
    axios
    .get(HostUrl+"get-supporters/"+ id +"/")
    .then((respsonse)=>{
    setSupporters(respsonse.data);
    console.log(respsonse.data);
  })
  };
  return (
    <div>

<div className="w-1/3 bg-gray-50 p-4">
      {data.map((item) => (
        <div className="p-2 ml-2 mt-1 bg-blue-gray-50" key={item.id}>
          <div className="flex justify-start items-center gap-6 p-2">
            <img src={picturess} alt="" style={{ width: "25px" }} />
            {/* <p2 className="text-black"> {item.category.name} </p2> */}
            {/* <a href=""> */}
            <p2 className="text-black cursor-pointer" onClick={(e) => updatesupporters(e, item.id)}> {item.name} </p2>
            {/* </a> */}
            {/* <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              View Supporters
            </div> */}
          </div>
        </div>
      ))}
      </div>

      <div className="w-1/3 bg-blue-200 p-4">
      {supporters.map((item) => (
        <div className="p-2 ml-2 mt-1 bg-blue-gray-50" key={item.id}>
          <div className="flex justify-start items-center gap-6 p-2">
            <img src={picturess} alt="" style={{ width: "25px" }} />
            {/* <p2 className="text-black"> {item.category.name} </p2> */}
            {/* <a href=""> */}
            <p2 className="text-black cursor-pointer"> {item.name} </p2>
            {/* </a> */}
            {/* <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              View Supporters
            </div> */}
          </div>
        </div>
      ))}
      </div>

    </div>
  );
}

export default Category;
