import React, { useState } from "react";
//import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import classes from "./ContactForm.module.css";
import Heading from "../HomePageSectionHeading/Heading";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = data;
  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function myFunction1() {
    alert("Your data is submited!! Thank you.");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://v1.nocodeapi.com/tamil293/google_sheets/IwsIdzAIXQRciskB?tabId=Sheet1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[name, email, phone, message]]),
      });
      await response.json();
      setData({ ...data, name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off" id="enquiryForm">
        <div className={classes.container}>
          <div className={classes.contactBox}>
            <div className={classes.right}>
              {/* <h2 className={classes.h2}>Contact Us</h2> */}
              <Heading heading="Contact Us" />
              <input
                type="text"
                className={classes.field}
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handlechange}
              ></input>
              <input
                type="text"
                className={classes.field}
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handlechange}
              ></input>
              <input
                type="text"
                className={classes.field}
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={handlechange}
              ></input>
              <TextareaAutosize
                type="text"
                className={`${classes.field} ${classes.field2}`}
                name="message"
                placeholder="Your message"
                value={message}
                onChange={handlechange}
              />
              <button onClick={myFunction1} className={classes.btn}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
