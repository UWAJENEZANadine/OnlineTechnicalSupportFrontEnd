import React from "react";
import { useState } from "react";
import { HostUrl } from "../../pages/Configurations";
import axios from "axios";

function Admincategory() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const handleDesc = (event) => {
    const get_message = event.target.value;
    setDesc(get_message);
  };

  const handleTitle = (event) => {
    const get_message = event.target.value;
    setTitle(get_message);
  };

  const insert_message_in_db = (event) => {
    event.preventDefault();
    const json_data = {
      title: title,
      desc: desc,
    };
    axios.post(HostUrl + "tutorial/", json_data).then((response) => {
      // setMessages(response.data);
      setTitle("");
      setDesc("");
      window.alert("New FAQ sent!")
      // event.target.value = '';
    });
  };

  return (
    <div>
      <h1 className="ml-12"> NEW FAQ</h1>
      <form
      onSubmit={(e)=>insert_message_in_db(e)}
      >
        <div className=" m-4 rounded bg-blue-gray-200 p-4 w-9/12">
          <input
            placeholder="Enter an issue"
            className="m-4  ml-8 rounded p-2 w-10/12"
            value={title}
            onChange={(e) => handleTitle(e)}
          />
          <textarea
            name=""
            className="w-10/12 ml-8 rounded m-4 p-2"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter the solution to solve that issue"
            onChange={(e) => handleDesc(e)}
            value={desc}
          ></textarea>

          <input
            type="submit"
            className="w-10/12 ml-8 rounded p-2 bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
}

export default Admincategory;
