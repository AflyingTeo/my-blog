const express = require('express');
const app = express();
const port = 3000;

const authRote = require('./routes/auth.route');
const userRote = require('./routes/user.route');

const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

const db = require('./config/db');

//Connect to Database
db.connect();

//Json use

app.use('/api/auth', authRote);
app.use('/api/user', userRote)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})