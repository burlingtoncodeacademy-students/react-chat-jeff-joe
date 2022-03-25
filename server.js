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

// Get all messages
app.get('/allmessages', (req, res) => {
    Message.find({}, function(err, messages) {
      let messageMap = {}
      messages.forEach(function(message) {
        messageMap[message._id] = message
      })
      res.send(messageMap)
    })
})

// Post message
app.post("/create", async (req, res) => {
  if (room === 'room1') {
    const newMessage = new Message ({
        when: req.body.when,
        name: req.body.name,
        room1: true,
        room2: false,
        room3: false,
        room4: false,
        body: req.body.body
    })
    } else if (room === 'room2') {
    const newMessage = new Message ({
      when: req.body.when,
      name: req.body.name,
      room1: false,
      room2: true,
      room3: false,
      room4: false,
      body: req.body.body
    })
    } else if (room === 'room3') {
    const newMessage = new Message ({
      when: req.body.when,
      name: req.body.name,
      room1: false,
      room2: false,
      room3: true,
      room4: false,
      body: req.body.body    
    })
    } else if (room === 'room4') {
    const newMessage = new Message ({
      when: req.body.when,
      name: req.body.name,
      room1: false,
      room2: false,
      room3: false,
      room4: true,
      body: req.body.body       
    })
  }
  await newMessage.save()
  res.redirect("/")
});

// Set port and listen for requests
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
