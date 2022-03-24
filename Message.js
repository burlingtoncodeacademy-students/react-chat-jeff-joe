const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/message");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

const messageSchema = new mongoose.Schema({
    when: Date,
    user: String,
    roomone: Boolean,
    roomtwo: Boolean,
    roomthree: Boolean,
    roomfour: Boolean,
    body: String
});

const Message = mongoose.model("message", messageSchema);

/*
async function start() {
    action = await ask(
      "Welcome to the robot factory! What do you want to do? (Create, Read, Update, Delete) "
    );
  
    while (flag) {
      if (action === "Create") {
        creatorName = await ask("Who is the creator?\n");
        robotName = await ask("Designate this robot's name:\n");
        robotColor = await ask("What color is the robot?\n");
        friend = await ask("Is this robot a friend? Enter Y or N\n");
        if (friend === "Y") {
          friend = true;
          killer = false;
        } else if (friend === "N") {
          friend = false;
          killer = true;
          console.log("Oh no! A killer robot");
        }
        serialNumber = await ask("What is the serial number?\n");
        date = new Date();
  
        response = new Robot({
          creatorName: creatorName,
          robotName: robotName,
          robotColor: robotColor,
          friend: friend || null,
          killer: killer || null,
          serialNumber: serialNumber,
          date: date,
        });
  
        await response.save();
        console.log("Your robot has been created!");
      } else if (action === "Read") {
        allRobots = await Robot.find({});
        console.log(allRobots);
      } else if (action === "Update") {
        allRobots = await Robot.find({});
        console.log(allRobots);
        updateTarget = await ask(
          "What is the ID of the robot you want to update?\n"
        );
        updateField = await ask("What field do you want to update?\n");
        update = await ask("Enter a new value ");
        await Robot.updateOne(
          { _id: updateTarget },
          { $set: { [updateField]: update } }
        );
        console.log("Your robot has been updated!");
      } else if (action === "Delete") {
        allRobots = await Robot.find({});
        console.log(allRobots);
        target = await ask("What is the ID of the robot you want to delete?\n");
        await Robot.deleteOne({ _id: target });
        console.log("Your robot has been deleted!");
      } else {
        console.log("Invalid entry! Try again.");
      }
      playagain = await ask(
        "Do you want to do anything else with the robot factory? Enter Y or N\n"
      );
      if (playagain === "Y") {
        action = await ask(
          "What would you like to do? (Create, Read, Update, Delete)\n"
        );
        start();
      } else if (playagain === "N") {
        flag = false;
      }
    }
    process.exit();
  }
  
  start();
*/


module.exports = Message
