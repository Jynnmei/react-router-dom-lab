import React, { useState } from "react";

const MailboxForm = (props) => {
  const [formData, setFormData] = useState({
    boxSize: "Small",
    boxOwner: "",
  });

  const handleChange = (event) => {
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    console.log("You clicked submit.");

    setFormData({ boxSize: "Small", boxOwner: "" });
  };

  return (
    <div className="mailboxformDiv">
      <h1>New Mailbox</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label className="col-sm-4">Enter a Boxholder:</label>
          <input
            className="col-sm-8"
            type="text"
            name="boxOwner"
            value={formData.boxOwner}
            onChange={handleChange}
            placeholder="Boxholder name"
          ></input>

          <div className="row">
            <label className="col-sm-4">Select a Box Size:</label>
            <select
              className="col-sm-8"
              name="boxSize"
              value={formData.boxSize}
              onChange={handleChange}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MailboxForm;
