const mongoose = require('mongoose');

// const url ="mongodb://127.0.0.1:27017/portfolio";
const user = process.env.user;
const password = process.env.password;
const database = process.env.database;


const url = "mongodb+srv://"+user+":"+password+"@cluster0.xxzcvsv.mongodb.net/"+database+"?retryWrites=true&w=majority";

// Creating a database
mongoose.connect(url).then(() => {

    console.log("connection successfully");

}).catch((error) => {

    console.log(error);
    
})
