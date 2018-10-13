const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const app = express();

// set api routes
app.get('/', (req, res, next) => {
  res.send('jo');
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys.js').mongoUri;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

//Password middleware
app.use(passport.initialize());

// Passport Config
//require('./config/passport')(passport);

// app.use routes

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('react_portfolio_client'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'react_portfolio_client', 'build', 'index.html')
    );
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server started...'));
