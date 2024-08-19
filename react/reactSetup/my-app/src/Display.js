import React from "react";

function Display({ mood }) {
  return (
    <div className="display">
      {mood ? <h2>기분이 {mood}</h2> : <h2></h2>}
    </div>
  );
}

export default Display;
