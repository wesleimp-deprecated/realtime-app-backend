require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectionString, options} = require('./config/database');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

// conecta ao mongodb
mongoose.connect(connectionString, options);

// server config
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware
app.use((req, res, next) => {
  req.io = io;
  return next();
});

// Register routes
app.use('/api', require('./routes'));

server.listen(process.env.PORT, process.env.HOST, () => console.log('Server running'));