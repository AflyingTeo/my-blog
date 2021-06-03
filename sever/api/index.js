const express = require('express');
const app = express();
const port = 5000;
const multer = require('multer');

const authRote = require('./routes/auth.route');
const userRote = require('./routes/user.route');
const postsRote = require('./routes/posts.route');
const categoryRote = require('./routes/category.route')

const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/db');

//Connect to Database
db.connect();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images")
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  }
})
//Json use
app.use(express.json());


const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded!!!');
})
app.use('/api/auth', authRote);
app.use('/api/users', userRote);
app.use('/api/posts', postsRote);
app.use('/api/categories', categoryRote);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})