// import { react } from "React";
import React from "react";
import "./App.css";
const key = "563492ad6f917000010000019f59e318eece45ada47edcfbeb0ad8ea";

const fetchUrl = async () => {
  const data = await fetch(key, {});
};

function App() {
  return (
    <div className="App">
      <header className="App-header">Ali</header>
    </div>
  );
}

export default App;
