import React, { useState } from "react";

const LetterForm = (props) => {
  const [formData, setFormData] = useState({
    mailboxId: "",
    recipient: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addLetter({
      recipient: formData.recipient,
      message: formData.message,
      mailboxId: Number(formData.mailboxId),
    });
    console.log("You clicked submit.");

    setFormData({ mailboxId: "", recipient: "", message: "" });
  };

  return (
    <div className="letterformDiv">
      <h1>New Letter</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label className="col-sm-4">Select a Mailbox</label>
          <select
            className="col-sm-8"
            name="mailboxId"
            value={formData.mailboxId}
            onChange={handleChange}
          >
            <option value="">-- Please select a mailbox --</option>
            {props.mailboxes.map((mailbox) => (
              <option key={mailbox._id} value={mailbox._id}>
                {mailbox.boxOwner}
              </option>
            ))}
          </select>

          <div className="row">
            <label className="col-sm-4">Recipient</label>
            <input
              className="col-sm-8"
              type="text"
              name="recipient"
              value={formData.recipient}
              onChange={handleChange}
              placeholder="Recipient name"
            ></input>
          </div>

          <div className="row">
            <label className="col-sm-4">Message</label>
            <input
              className="col-sm-8"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
            ></input>
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LetterForm;
