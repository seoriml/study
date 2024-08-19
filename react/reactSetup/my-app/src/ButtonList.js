import React from "react";
import Button from "./Button";

function ButtonList({ setMood }) {
  const moods = ["좋아요", "정말좋아요", "최고에요", "미쳤어요"];

  return (
    <div className="buttonList">
      {moods.map((mood) => (
        <Button key={mood} mood={mood} setMood={setMood} />
      ))}
    </div>
  );
}

export default ButtonList;
