const express = require("express");
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000;

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({ extended:true }))

const Message = require('./Message.js')



app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
