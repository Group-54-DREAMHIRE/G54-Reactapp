import React, { useState } from "react";

const ContactUs = () => {
  const [newEntry, setNewentry] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    myCheckbox: "",
  });

  const inputdata = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setNewentry((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  };
  return (
    <div className="l-ContactUs-Container">
      <div className="l-ContactUs-up">
        <h1>Contact Us</h1>
        <h2>This is our Contact Us page</h2>
      </div>
      <form>
        <div className="l-ContactUs-down">
          <div className="l-ContactUs-down-2">
            <div className="l-ContactUs-down-2-left">
              <h3>First Name</h3>
              <input
                type="text"
                className="l-ContactUs-down-2-left-text"
                value={newEntry.firstName}
                name="firstName"
                onChange={inputdata}
              />
            </div>

            <div className="l-ContactUs-down-2-right">
              <h3>Last Name</h3>
              <input
                type="text"
                className="l-ContactUs-down-2-right-text"
                value={newEntry.lastName}
                name="lastName"
                onChange={inputdata}
              />
            </div>
          </div>
          <div className="l-ContactUs-down-3">
            <div className="l-ContactUs-down-2-left">
              <h3>Email</h3>
              <input
                type="text"
                className="l-ContactUs-down-2-left-text"
                value={newEntry.email}
                name="email"
                onChange={inputdata}
              />
            </div>

            <div className="l-ContactUs-down-2-left">
              <h3>Phone Number</h3>
              <input
                type="text"
                className="l-ContactUs-down-2-left-text"
                value={newEntry.phoneNumber}
                name="phoneNumber"
                onChange={inputdata}
              />
            </div>
          </div>
          <div className="l-ContactUs-down-4">
            <h3>Message</h3>

            <input
              type="text"
              className="l-ContactUs-down-4-text"
              value={newEntry.message}
              name="message"
              onChange={inputdata}
            />
          </div>

          <button className="l-ContactUs-form-submit" type="submit">
            Submit
          </button>
        </div>
        <div className="l-ContactUs-Checkbox">
          <input
            type="checkbox"
            name="myCheckbox"
            onChange={inputdata}
            value="tik"
          />
          Check this box
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
