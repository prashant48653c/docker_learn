
const express = require('express');
const app = express();
require("dotenv").config()
// create a route for the home page
app.get('/', (req, res) => {
  res.send(process.env.data);
});

// start the server
app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});