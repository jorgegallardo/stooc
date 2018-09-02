const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/api/auth');
const dashboard = require('./routes/api/dashboard');

const app = express();
const db = require('./config/keys').mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Mongo DB connected.');
  })
  .catch(() => console.log('Failed to connect to database.'));

app.get('/', (req, res) => res.send('yoo'));

//express api routes
app.use('/api/auth', auth);
app.use('/api/dashboard', dashboard);

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
