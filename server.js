const express = require('express');
const loggerMiddleware = require('./middleware/logger');
const { imageMiddleware, htmlMiddleware } = require('./middleware/staticFiles');
const { connectToDatabase } = require('./config/database');
const apiRouter = require('./routes/api');
const cors = require('cors');

const app = express();
const PORT = 3000;

async function startServer() {
    try {
        await connectToDatabase();

       app.use(cors({
            origin: [
                'https://rumaisag.github.io',  
                'http://localhost:3000',         
                'http://127.0.0.1:3000'            
            ],
          
            methods: ['GET', 'POST', 'PUT'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }));
        app.use(express.json());

        // Logger Middleware
        app.use(loggerMiddleware);

        // Serve static frontend files
        app.use(htmlMiddleware);

        // Serve images
        app.use(imageMiddleware);

        // API routes
        app.use('/api', apiRouter);

       

        // 404 handler
        app.use((req, res) => {
            res.status(404).json({ error: 'resource not found' });
        });

        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}`);
        });

    } catch (error) {
        console.error('failed to start server:', error);
    }
}

startServer();
