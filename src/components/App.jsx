import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const createCard = (contacts) => {
    return (
      <Card
        key={contacts.id}
        name={contacts.name}
        img={contacts.imgURL}
        tel={contacts.phone}
        email={contacts.email}
      />
    );
  };
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
