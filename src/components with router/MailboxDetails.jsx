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
      <section className="mailbox-info">
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
      </section>

      <section className="letters-section">
        <h2>Letters</h2>
        <div className="letter-container">
          {selectedLetters.length === 0 && <p>No letters yet.</p>}
          {selectedLetters.length > 0 && (
            <ul>
              {selectedLetters.map((letter, idx) => (
                <li key={idx}>
                  <div className="letter-recipient">{letter.recipient}</div>
                  <div className="letter-message">{letter.message}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default MailboxDetails;
