import React, { useState, useEffect } from "react";
import Clock from "./Clock"

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    setText("bah")
    document.title = text;
  }, [text]);

  

  
  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(!showClock)}>Hide Clock</button>
    </div>
  )
}

export default App;
