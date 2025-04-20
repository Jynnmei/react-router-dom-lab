import React from "react";
import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <div className="mailboxlistDiv">
      <h1>Mailboxes</h1>
      <br />
      <div className="mailboxes-container">
        {props.mailboxes.map((mailbox) => (
          <Link
            to={`/mailboxes/${mailbox._id}`}
            key={mailbox._id}
            className="mailboxlist"
          >
            <h4>Mailbox {mailbox._id}</h4>
            <br />
            <p>Owner: {mailbox.boxOwner}</p>
            <p>Size: {mailbox.boxSize}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MailboxList;
