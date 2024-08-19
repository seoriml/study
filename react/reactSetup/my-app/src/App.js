import React, { useState } from "react";
import ButtonList from "./ButtonList";
import Display from "./Display";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>오늘의 기분을 선택해주세요</h1>
      <ButtonList setMood={setMood} />
      <Display mood={mood} />
    </div>
  );
}

export default App;
