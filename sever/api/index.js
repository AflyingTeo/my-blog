const express = require('express');
const app = express();
const port = 3000;

const authRote = require('./routes/auth.route');

const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

const db = require('./config/db');

//Connect to Database
db.connect();

//Json use

app.use('/api/auth', authRote);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})