const express = require('express');
const loggerMiddleware = require('./middleware/logger');
const imageMiddleware = require('./middleware/staticFiles');
const apiRouter = require('./routes/api');

const cors = require("cors");

const app = express();

app.use(cors());

const PORT =  3000;

// Logger Middleware
app.use(loggerMiddleware);

//Static File Middleware
app.use(imageMiddleware);

// API Router 
app.use('/api', apiRouter);

//Middleware for error handling
app.use((req, res) => {
    res.status(404).json({error: 'Resource not found'});
});


app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});