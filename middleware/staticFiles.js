const express = require('express');
const path = require('path');

// Serve static files from 'images' directory
const imageMiddleware = express.static('images', {
    fallthrough: true 
});

const htmlMiddleware = express.static(
    path.join(__dirname, '../../Lessons-Apps-Vue/public'),
    { fallthrough: true }
);

module.exports = {
    imageMiddleware,
    htmlMiddleware
};