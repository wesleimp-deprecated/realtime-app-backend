const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://tweet:tweet123@ds123635.mlab.com:23635/realtime-app', { useNewUrlParser: true });
app.use(express.json());
app.use(cors());

app.use('/api', require('./routes'));

app.listen(3001, () => {
  console.log('listen on port 3001');
});