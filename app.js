const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User'); 

const app = express();
app.use(express.json());

const DB_HOST="@cluster0.a5vygkf.mongodb.net"
const DB_USER="HengZhou"
const DB_PASSWORD="zh514032259"
const DB_NAME="lab4-comp3133"
const DB_CONNECTION_STRING='mongodb+srv://HengZhou:<zh514032259>@cluster0.a5vygkf.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB_CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(success =>{
    console.log('Success Mongodb connection')
})

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
