const express = require('express');
const app = require('../server/server'); // Modify path if needed

app.get('/', (req, res) => {
    res.send('hello world');
});
