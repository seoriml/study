import React from "react";

const ColorText = ({ color }) => {
  return <p style={{ color: color }}>색이 바뀌어요</p>;
};

// App 컴포넌트 정의
function App() {
  return (
    <div>
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </div>
  );
}

export default App;
