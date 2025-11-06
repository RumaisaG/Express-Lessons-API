const express = require('express');
const router = express.Router();


router.get('/lessons', (req, res) => {
    res.json(lessons);
});


router.get('/lessons/:id', (req, res) => {
    const lessonId = parseInt(req.params.id);
    const lesson = lessons.find(l => l.id === lessonId);
    
    if (lesson) {
        res.json(lesson);
    } else {
        res.status(404).json({error: 'Lesson not found'});
    }
});

module.exports = router;