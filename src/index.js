require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectionString, options} = require('./config/database');
const app = express();

const port = process.env.PORT;

// conecta ao mongodb
mongoose.connect(connectionString, options);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes'));

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});