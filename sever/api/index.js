const express = require('express');
const app = express();
const port = 3000;

const authRote = require('./routes/auth.route');
const userRote = require('./routes/user.route');
const postsRote = require('./routes/posts.route');

const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/db');

//Connect to Database
db.connect();

//Json use
app.use(express.json());

app.use('/api/auth', authRote);
app.use('/api/users', userRote);
app.use('/api/posts', postsRote);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})