// Establishing server connection.
const express = require('express');
const app = express();
const port = 8000;
app.listen(port, () => {
  console.log(`VandyHacks Hackathon app listening at http://localhost:${port}`);
})

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(cors());

// Database Connection
const config = require('./config/config');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
	.then(() => console.log('MongoDB Connected !'))
	.catch(err => console.log(err));

//=================================
//        REST API Calls
//=================================
app.use('/api/diningOptions', require('./routes/diningOptions'));