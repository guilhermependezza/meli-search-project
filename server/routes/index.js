
const express = require('express');
const api = express.Router();

api.use('/items/', require('./products/products-api'))

module.exports = api;