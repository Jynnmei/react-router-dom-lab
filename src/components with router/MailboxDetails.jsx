import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!selectedBox) {
    return <div>Mailbox not found!</div>;
  }

  return (
    <div className="mailbox-details">
      <h2>Details</h2>
      <p>
        <strong>Boxholder:</strong> {selectedBox._id}
      </p>
      <p>
        <strong>Owner:</strong> {selectedBox.boxOwner}
      </p>
      <p>
        <strong>Box Size:</strong> {selectedBox.boxSize}
      </p>

      <br />
      <h2>Letters</h2>
      {selectedLetters.length === 0 && <p>No letters yet.</p>}
      {selectedLetters.length > 0 && (
        <ul>
          {selectedLetters.map((letter, idx) => (
            <li key={idx}>
              <strong>Recipient</strong> {letter.recipient}
              <br />
              <strong>Message:</strong> {letter.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailboxDetails;
