const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Super hero details app."});
});


require('./app/routes/routes.js')(app);

// listen all requests on 3000 port
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
