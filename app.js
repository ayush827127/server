require('dotenv').config();
const express = require('express');
require("../server/src/db/conn");
const User = require('./src/models/userdata');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware for parsing JSON
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    // res.render('index')
    res.send("This  is dynamic website");
})

app.post('/', async (req, res) => {
    try {
        const UserData = new User(req.body);
       let result =  await UserData.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, () => {

    console.log(`Server is running at http://127.0.0.1:${port}/`);
})