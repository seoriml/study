import React from "react";

function Button({ mood, setMood }) {
  return (
    <button className="button" onClick={() => setMood(mood)}>
      기분이: {mood}
    </button>
  );
}

export default Button;
