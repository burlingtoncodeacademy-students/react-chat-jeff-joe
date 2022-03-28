const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// Parse requests of content-type application/json
app.use(bodyParser.json());

// Enables cross-origin requests
app.use(cors());

// Allows us to understand urlencoded payloads
app.use(bodyParser.urlencoded({ extended:true }));

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// Basic route
app.get('/', (req, res) => {
    res.json("App is working!");
})

// Set port and listen for requests
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
