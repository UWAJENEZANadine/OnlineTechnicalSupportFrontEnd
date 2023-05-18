import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoBagHandle } from "react-icons/io5";
import { HostUrl } from "../../pages/Configurations";
import chartimage  from "../../Assets/chart.png"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';


ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const Admindashboard = () => {
  const [numberOfCategory, setnumberOfCategory] = useState(null);
  const [numberOfsubCategory, setnumberOfSubCategory] = useState(null);
  const [numberOfclients, setnumberOfsupporters] = useState(null);
  const [numberOfconversatin, setnumberOfconversatin] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    // console.log("Token is ", access_token);

    axios
      .get(HostUrl + "number-categories/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setnumberOfCategory(res.data["number"]);
      })
      .catch((err) => {
        console.log(err);
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

    axios
      .get(HostUrl + "number-subcategories/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setnumberOfSubCategory(res.data["number"]);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(HostUrl + "number-clients/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setnumberOfsupporters(res.data["number"]);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(HostUrl + "my-conversation/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setnumberOfconversatin(res.data["number"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  // chart data
  const chart_data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr','May'],
    datasets:[
      {
        label: 'Issues',
        data: [21,28,27,25,23],
        backgroundColor: '#7ebdc3',
        borderColor: 'black',
        borderWidth: 1,

      },{
        label: 'Resolved',
        data: [18,26,22,25,21],
        backgroundColor: '#DCDF8E',
        borderColor: 'black',
        borderWidth: 1,

      },{
        label: 'Failed',
        data: [3,2,2,5,2],
        backgroundColor: '#DF8E92',
        borderColor: 'black',
        borderWidth: 1,

      }
    ]
  }

  const chart_options ={}

  return (
    <>
      <div className="flex pr-40 gap-4 px-2 pt-2">
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total categories
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {numberOfCategory ? <>{numberOfCategory}</> : <> 0 </>}
                <span className="text-sm text-green-500 pl-2"> Categories</span>
              </strong>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Sub Categories
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {numberOfsubCategory ? <>{numberOfsubCategory}</> : 0}
                <span className="text-sm text-green-500 pl-2">
                  Sub Categories
                </span>
              </strong>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Client
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {numberOfclients ? <>{numberOfclients}</> : 0}
                <span className="text-sm text-green-500 pl-2">Supporters</span>
              </strong>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Conversations
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {numberOfconversatin ? <>{numberOfconversatin}</> : 0}
                <span className="text-sm text-green-500 pl-2">
                  Conversations
                </span>
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>

      <h2 className="ml-16 font-extrabold mt-4"> MY ACTIVITIES </h2>
      <div className="m-2 ml-8 w-9/12">
      <Bar
      data ={chart_data}
      options={chart_options}
      height={76}
      width={200}
      />
      </div>
    </>
  );
};

export default Admindashboard;
