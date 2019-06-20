
const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
    res.json({ response: 'Initial route' })
});

module.exports = api;