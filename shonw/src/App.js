// import { createClient } from 'pexels';
// const client = createClient('563492ad6f917000010000019f59e318eece45ada47edcfbeb0ad8ea'); // All requests made with the client will be authenticated
import React, { useEffect } from "react";
import "./App.css";
const key = "563492ad6f91700001000001e12e6de3d88c4d2f93b8cb6da45c5793";
const api_Url = "https://api.pexels.com/v1/search?query=people";
// const api_Url = "https://api.pexels.com/v1/search?query=people&per_page=40";
// https://api.pexels.com/v1/curated?page=2&per_page=40
const fetchUrl = async () => {
  const data = await fetch(api_Url, { headers: { Authorization: key } });
  const result = await data.json();
  //   console.log(result);
  return result;
};
function App() {
  useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchUrl();
      console.log(images.then(console.log(images.value)));
    };
    fetchImages();

    // return () => {};
  }, []);
  return (
    <div className="App">
      <header className="App-header">Ali</header>
    </div>
  );
}

export default App;
