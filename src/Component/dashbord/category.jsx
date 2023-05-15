import picturess from "../../Assets/software.png";
import "../../css/category.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/subcategory/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div className="p-2 ml-2 mt-1 bg-blue-gray-50" key={item.id}>
          <div className="flex justify-start items-center gap-6 p-2">
            <img src={picturess} alt="" style={{ width: "25px" }} />
            {/* <p2 className="text-black"> {item.category.name} </p2> */}
            <p2 className="text-black"> {item.name} </p2>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              View Supporters
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
