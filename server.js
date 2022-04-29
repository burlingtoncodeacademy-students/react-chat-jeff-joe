const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const MessageSchema = require('./models/message.model.js')

// Parse requests of content-type application/json
app.use(bodyParser.json());

// Enables cross-origin requests
app.use(cors());

// Allows us to understand urlencoded payloads
app.use(bodyParser.urlencoded({ extended:true }));

// const db = require("./models");

//connects to our messages database
mongoose
  .connect("mongodb://localhost:27017/messages", {
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

  const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

// Get all messages

const Message = mongoose.model("messages", MessageSchema)


app.get('/allmessages', async (req, res) => {
    const allMessages = await Message.find({})
    //   , function(err, messages) {
    //   let messageMap = {}
    //   db.messages.forEach(function(message) {
    //     messageMap[message._id] = message
    //   })
    // })
    res.json(allMessages)
})

// Post message
app.post("/create", async (req, res) => {
    const newMessage = new Message ({
        when: req.body.when,
        name: req.body.name,
        room1: req.body.room1,
        room2: req.body.room2,
        room3: req.body.room3,
        room4: req.body.room4,
        msg: req.body.msg
    })
  await newMessage.save()
  res.redirect("/")
});

// Set port and listen for requests
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
