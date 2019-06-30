const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverConfig = require('../constants/server');

const app = express();

// Config bodyparser and cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Use routes
const routes = require('./routes');

app.use('/api', routes);

// Start listen
app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});
