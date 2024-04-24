const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello AWS</h1>");
});

const port = 5001;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
