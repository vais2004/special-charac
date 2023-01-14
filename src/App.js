import React, { useState } from "react";
import "./styles.css";

var specialDictionary = {
  "!": "Exclamation",
  "@": "At sign",
  "#": "hash",
  $: "Dollar sign",
  "%": "percent",
  "^": "Caret",
  "&": "Ampersand",
  "*": "Asterisk",
  ":": "colon"
};

var specialWeKnow = Object.keys(specialDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function specialInputHandler(event) {
    var userInput = event.target.value;

    var meaning = specialDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function specialClickHandler(special) {
    console.log(special);
  }

  return (
    <div className="App">
      <h1> inside outt! </h1>

      <input onChange={specialInputHandler} />

      <h2> {meaning} </h2>

      <h3> special we know</h3>
      {specialWeKnow.map(function (special) {
        return (
          <span
            onClick={() => specialClickHandler(special)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={special}
          >
            {special}
          </span>
        );
      })}
    </div>
  );
}
