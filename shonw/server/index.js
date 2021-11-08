const express = require("express");
const app = express();
const port = 3000;
// const key = "563492ad6f917000010000019f59e318eece45ada47edcfbeb0ad8ea";
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port port!`));
console.log("object");