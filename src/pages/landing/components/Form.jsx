import axios from "axios";
import React from "react";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

const Form = () => {
  const ConactObject = {
    properties: {
      email: "ali@gmail.com",
      firstname: "Faisal",
      lastname: "Ahmded",
    },
  };

  const createContact = async () => {
    try {
      const response = await axios.post("https://api.hubspot.com/crm/v3/objects/contacts", ConactObject, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(`Error Occurred ${error}`);
    }
  };

  return (
    <div className="h-[20vh] bg-gray-100">
      <h1>Contact From</h1>
      <button onClick={createContact}>Submit</button>
    </div>
  );
};

export default Form;
