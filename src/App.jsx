import React, { useState } from "react";
import "./App.css";
import lightOnImage from "./assets/images/bulbon.gif";
import lightOffImage from "./assets/images/bulboff.gif";

function App() {
  const [isOn, setIsOn] = useState(false);

  function toggleLight() {
    setIsOn(prev => !prev);
  }

  return (
    <div className="container">
      <img
        src={isOn ? lightOnImage : lightOffImage}
        alt="Light Bulb"
        width="100"
        height="180"
        onClick={toggleLight}
        style={{ cursor: "pointer" }}
      />
      <p className="message">
        The light is <strong>{isOn ? "ON" : "OFF"}</strong>. Click the bulb to turn it {isOn ? "OFF" : "ON"}.
      </p>
    </div>
  );
}

export default App;
