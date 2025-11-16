const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDb } = require('../config/database');

router.get('/lessons', async (req, res) => {
    try {
        const db = getDb();
        const lessons = await db.collection('Lessons').find().toArray();
        res.json(lessons);
    } catch (error) {
        console.error('Error fetching lessons:', error);
        res.status(500).json({ error: 'Failed to fetch lessons' });
    }
});

router.get('/search', async(req,res) => {
    try {

        const {q} = req.query
        const db = getDb();

        if(!q) {
            const lessons = await db.collection('Lessons').find().toArray();
            return res.json(lessons);
        }
        const searchRegex = new RegExp(q, 'i');
        
        const results = await db.collection('Lessons').find({
            $or: [
                { topic: { $regex: searchRegex } },
                { location: { $regex: searchRegex } },
                { description: { $regex: searchRegex } },
                { category: { $regex: searchRegex } }
            ]
        }).toArray();
        
        res.json(results);

    }catch (error) {
        console.error('there has been a search error :', error);
        res.status(500).json({ error: 'internal server error' });
    }
}) 

router.put('/lessons/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const db = getDb();
    
    const collection = db.collection('Lessons');
    
    collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updates }
    ).then(result => {
        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Lesson not found' });
        }

        res.json({
            success: true,
            message: 'Lesson updated successfully',
            updatedFields: Object.keys(updates),
            result: result
        });
    })
    .catch(error => {
        console.error('Update lesson error:', error);
        res.status(500).json({ error: 'Internal server error' });
    });
});


module.exports = router;