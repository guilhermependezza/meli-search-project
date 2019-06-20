const serverConfig = require('../constants/server');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Config bodyparser and cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Use routes
const routes = require('./routes');
app.use('/api', routes);

// Start listen
app.listen(serverConfig.port, () => {
    console.log(`Server is running on port ${serverConfig.port}`)
});
