const express = require('express');
const router = express.Router();
const { getDb } = require('../config/database');

router.get('/lessons', async (req, res) => {
    try {
        const db = getDb();
        const lessons = await db.collection('lessons').find().toArray();
        res.json(lessons);
    } catch (error) {
        console.error('Error fetching lessons:', error);
        res.status(500).json({ error: 'Failed to fetch lessons' });
    }
});


module.exports = router;