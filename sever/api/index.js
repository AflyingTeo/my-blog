const express = require('express');
const app = express();
const port = 3000;

const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/db');

//Connect to Database
db.connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})