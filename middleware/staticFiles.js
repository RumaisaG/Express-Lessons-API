const express = require('express');
const path = require('path');
const fs = require('fs');

const imageMiddleware = (req, res, next) => {
    if (!req.path.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
        return next();
    }

    try {
        const imagesDir = path.join(process.cwd(), 'images');
        const imagePath = path.join(imagesDir, req.path);
        
        if (!imagePath.startsWith(imagesDir)) {
            return res.status(400).json({ error: 'Invalid image path' });
        }

        fs.access(imagePath, fs.constants.F_OK, (err) => {
            if (err) {
                return res.status(404).json({
                    success: false,
                    error: 'Image not found',
                    requestedPath: req.path
                });
            }
            
            express.static(imagesDir)(req, res, next);
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error processing image request' });
    }
};

const htmlMiddleware = express.static(
    path.join(__dirname, '../../Lessons-Apps-Vue/public'),
    { fallthrough: true }
);

module.exports = {
    imageMiddleware,
    htmlMiddleware
};