import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxForm from "./components with router/MailboxForm";
import MailboxList from "./components with router/MailboxList";
import MailboxDetails from "./components with router/MailboxDetails";
import "./App.css";
import LetterForm from "./components with router/LetterForm";

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxSize: formData.boxSize,
      boxOwner: formData.boxOwner,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  const addLetter = (formData) => {
    setLetters([...letters, formData]);
  };

  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route
          path="/new-letter"
          element={
            <LetterForm
              letters={letters}
              addLetter={addLetter}
              mailboxes={mailboxes}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
