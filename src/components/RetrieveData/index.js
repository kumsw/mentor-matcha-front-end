import React, { useState } from "react";
import DisplayTable from "../DisplayTable";

import "./styles.css";

// component is working without useEffect because it will only grab all the data.
// As we add more button (to find your match) then useeffect we will want them to run at different times.
const url = process.env.REACT_APP_BACKEND_URL;
function RetrieveData() {
  const [formData, setFormData] = useState([]);
  const [text, setText] = useState("");
  const [formData2, setFormData2] = useState([]);

  async function getAllData() {
    const res = await fetch(`${url}/mentor`);
    const data = await res.json();
    console.log(data);
    let payload = data.payload;
    console.log(payload);
    setFormData(payload);
  }

  async function getAllDataMentee() {
    const res = await fetch(`${url}/mentee`);
    const data = await res.json();
    console.log(data);
    let payload = data.payload;
    console.log(payload);
    setFormData2(payload);
  }
  // function handleClick() {
  //   setFormData(formData);
  // }

  // async function to get user input value, hand the value to the api and recieve the myersbriggs matches
  async function matchMB(text) {
    const res = await fetch(`${url}/bootcamperMatch?myersBriggs=${text}`);
    console.log(text);
    const data = await res.json();
    let payload = data.payload;
    console.log(data);
    setFormData(payload);
  }

  return (
    <div className="containerMatch">
      <br />
      <br />
      <h1 className="h1Form">
        See your match, who <br /> your mentor's going to be
      </h1>
      <div className="imgs">
        <img
          alt="form page illustration"
          src="https://cdn.dribbble.com/users/1647667/screenshots/10748446/media/46e4cd887fb570b00ed4779244bfb9b6.jpg"
        />
      </div>
      <button
        onClick={() => {
          getAllData();
          getAllDataMentee();
        }}
        className="btnsForm"
      >
        Get all data
      </button>
      <br />
      <br />
      <div>
        <input onChange={(e) => setText(e.target.value)} />
        <button onClick={() => matchMB(text)} className="btnsForm">
          Get matches
        </button>
      </div>
      <br />
      <br />
      <div>
        <table className="table" id="data-display">
          <thead>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>About</th>
            <th>Language experience</th>
            <th>Myers Briggs</th>
            <th>Industry experience</th>
            <th>Interests</th>
            <th>Last logged-in</th>
            <th>Email</th>
          </thead>
          <tbody>
            {formData &&
              formData.map((item) => {
                return (
                  <DisplayTable
                    firstName={item.firstname}
                    lastName={item.lastname}
                    introduction={item.introduction}
                    languages={item.languages}
                    myersBriggs={item.myersbriggs}
                    industry={item.industry}
                    interests={item.interests}
                    gid={item.gid}
                    gname={item.gname}
                    gpic={item.gpic}
                    gtime={item.gtime}
                    gemail={item.gemail}
                  />
                );
              })}
          </tbody>
          <tbody>
            {formData2 &&
              formData2.map((item) => {
                return (
                  <DisplayTable
                    firstName={item.firstname}
                    lastName={item.lastname}
                    introduction={item.introduction}
                    languages={item.languages}
                    myersBriggs={item.myersbriggs}
                    industry={item.industry}
                    interests={item.interests}
                    gid={item.gid}
                    gname={item.gname}
                    gpic={item.gpic}
                    gtime={item.gtime}
                    gemail={item.gemail}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RetrieveData;

// render a button which onClick it will display display the data in the table the data from the server to show all data
// Display this data in  a <p></p>
