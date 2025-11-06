const express = require('express');
const path = require('path');

// Serve static files from 'images' directory
const imageMiddleware = express.static('images', {
    fallthrough: true 
});


module.exports = imageMiddleware;