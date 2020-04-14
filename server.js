const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items')

const app = express();

// Bodyparser Middleware needed for the POST request to recognize the incoming Request Object as a JSON Object.
// You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests
// you are sending data (in the form of some data object) to the server and you are asking the server to accept
// or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo, due to a deprecated way to connect we need to add the parser and the topology
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));